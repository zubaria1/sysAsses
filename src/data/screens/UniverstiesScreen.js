import { Button, TextInput } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Picker } from "@react-native-community/picker";
import React from "react";
import UniversityItem from "../components/UniversityItem";
import universityApi from "../../api/university";

const UniverstiesScreen = ({navigation}) => {
  const universityList = useSelector(
    (state) => state.university.universityList
  );
  const [universityListState, updateuniversityList] = useState(universityList);
  const countryList = useSelector(
    (state) => state.university.countryList
  );
  const dispatch = useDispatch();

  const [unitext, onChangeText] = useState("");
  const [selectedValue, setSelectedValue] = useState('Ireland');

  const fetchData = async () => {
    try {
      const response = await universityApi.get(
        "search?name=university%20college"
      );
      dispatch({ type: "initialData", payload: response.data });
      updateuniversityList(response.data);
    } catch (err) {
      console.error(err);
    }
    
  };

  const fetchCountryData = () => {
    let countryList = [];
    universityList.forEach(
      (item) => {
        if(!countryList.includes(item.country))
        countryList.push(item.country);
      }
    )
    dispatch({ type: "contryData", payload: countryList });
  }

  const updateUniversityListfn = () => {
    const updatedUniList = universityList.filter(
      (item) => item.name.toLowerCase().includes(unitext.toLowerCase()) && item.country === selectedValue
    );
    updateuniversityList(updatedUniList);
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchCountryData();
  }, [universityList]);

  return (
    <View style={styles.list}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          label="Name"
          value={unitext}
          onChangeText={onChangeText}
        />
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {
            countryList.map(
              (item, index) => {
                return <Picker.Item label={item} value={item} key={index} />
              }
            )
          }
        </Picker>
      </View>
      <Button
        icon="magnify"
        mode="contained"
        onPress={updateUniversityListfn}
      >
        Search
      </Button>
      <FlatList
        data={universityListState}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <UniversityItem navigation={navigation} item={item}/>}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#faf5e6",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  textInput: {
    flex: 1,
    margin: 5,
  },
  picker: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    color: "#73736C",
    margin: 5,
    height: 65,
  },
});

export default UniverstiesScreen;
