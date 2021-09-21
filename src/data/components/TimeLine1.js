import { StyleSheet, Text, View } from "react-native";

import CircularComp from "./CircularComp"
import React from "react";

const TimeLine1 = (props) => {
  return (
    <View style={styles.upperLeftContainer}>
      <View style={{ alignItems: "center" }}>
      <CircularComp color={props.color} colorOpacity={props.colorOpacity}/>
        <View style={styles.verticleLine}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperLeftContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 105,
  },
  verticleLine: {
    height: "50%",
    width: 1,
    backgroundColor: "#909090",
  },
});

export default TimeLine1;
