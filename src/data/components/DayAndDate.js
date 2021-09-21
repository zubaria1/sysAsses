import { StyleSheet, Text, View } from "react-native";

import React from "react";

const DayAndDate = (props) => {
  return (
    <View style={styles.headDateContainer}>
      <Text style={styles.text}>
        {props.day}
      </Text>
      <Text>{props.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 5
  },
  headDateContainer: {
    flexDirection: "row",
    paddingVertical: 24,
    alignItems: "center",
    paddingLeft: 10,
  },
});

export default DayAndDate;
