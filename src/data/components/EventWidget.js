import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AgentPhoto } from "../../assets";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const EventWidget = (props) => {
  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <View style={{ flex: 1 }}>
        <Text>8 AM</Text>
        <Text>(30 mins)</Text>
      </View>
      <View style={styles.container(props.color)}>
        <View style={{ marginLeft: 20 }}>
          <View style={styles.flexRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color="white" />
            <Text style={styles.colorWhite}>5519 NE Skidmore Portland</Text>
          </View>
          <View style={styles.flexRow}>
            <Image source={AgentPhoto} style={styles.image} />
            <Text style={styles.colorWhite}>Rick Adams</Text>
          </View>
          <TouchableOpacity style={{marginVertical: 5}}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText(props.color)}>{props.status}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    borderRadius: 12,
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 6,
    height: 100,
    flex: 4
  }),
  flexRow: { flexDirection: "row", marginVertical: 2, alignItems: "center" },
  buttonContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignSelf: "baseline",
  },
  buttonText: (color) => ({
    color: color,
    paddingVertical: 4,
    paddingHorizontal: 8,
  }),
  colorWhite: {
    color: "white",
  },
  image: { borderRadius: 3, marginRight: 5 },
});

export default EventWidget;
