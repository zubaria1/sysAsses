import { StyleSheet, Text } from "react-native";

import { Card } from "react-native-paper";
import React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';

const UniversityItem = ({ navigation, item }) => {
  const province = item["state-province"];
  console.log("item",item)
  return (
    <TouchableOpacity onPress={() => navigation.navigate('UniversityDetail')}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Title
          title={item.item.name}
          subtitle={`${province ? province : ""} ${item.item["country"]}`}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});

export default UniversityItem;
