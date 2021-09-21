import { StyleSheet, View } from "react-native";

import CircularComp from "./CircularComp"
import React from "react";

const TimeLine2 = (props) => {
  return (
    <View style={styles.upperLeftContainer}>
      <View style={{ alignItems: "center"}}>
        <View style={styles.verticleLine}></View>
        <CircularComp color={props.color} colorOpacity={props.colorOpacity}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperLeftContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 105,
  },
  verticleLine: {
    height: "50%",
    width: 1,
    backgroundColor: "#909090",
  },
});

export default TimeLine2;
