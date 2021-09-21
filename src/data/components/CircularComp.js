import { StyleSheet, View } from "react-native";

import React from "react";

const CircularComp = (props) => {
  return (
    <View style={styles.outerCircle(props.colorOpacity)}>
      <View style={styles.innerCircle(props.color)}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: (colorOpacity) => ({
    backgroundColor: colorOpacity,
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    justifyContent: "center",
    alignItems: "center",
  }),
  innerCircle: (color) => ({
    backgroundColor: color,
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
  }),
});

export default CircularComp;
