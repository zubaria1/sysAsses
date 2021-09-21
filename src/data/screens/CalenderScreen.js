import { StyleSheet, Text, View } from "react-native";

import CircularComp from "../components/CircularComp"
import DayAndDate from "../components/DayAndDate";
import EventWidget from "../components/EventWidget";
import React from "react";
import TimeLine1 from "../components/TimeLine1";
import TimeLine2 from "../components/TimeLine2";

const CalenderScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.dateContainer}>
          <Text>Aug</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text>Sun</Text>
          <Text>11</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text>Mon</Text>
          <Text>12</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text>Tue</Text>
          <Text>13</Text>
        </View>
        <View style={styles.selectedDateContainer}>
          <Text style={{color: "white"}}>Wed</Text>
          <Text style={{color: "white"}}>14</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text>Thu</Text>
          <Text>15</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text>Fri</Text>
          <Text>16</Text>
        </View>
      </View>
      <DayAndDate day="Wednesday" date="07 August 2021"/>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <TimeLine1 color="#58B258CC" colorOpacity="#58B25875" />
          <TimeLine2 color="#FF8B00CC" colorOpacity="#FF8B0075" />
        </View>
        <View style={{ flex: 8 }}>
          <EventWidget color="#FF8B00CC" flex="flex-start" timeLine="two" status="Approved" />
          <EventWidget color="#58B258CC" flex="flex-end" timeLine="one" status="Pending" />
        </View>
      </View>
      <DayAndDate day="Thursday" date="08 August 2021"/>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <CircularComp color="#38274CCC" colorOpacity="#38274C75"/>
        </View>
        <View style={{ flex: 8 }}>
          <EventWidget color="#38274CCC" flex="flex-start" timeLine="two" status="Buyer Reschedule" />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row"
  },
  dateContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
  },
  selectedDateContainer: {
    backgroundColor: "#38274CCC",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});


export default CalenderScreen;
