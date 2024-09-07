import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getDayColor, getDayText } from "@/lib/utils";
import Column from "../Columns";

const CalendarHeader = ({ currentDate }: { currentDate: string }) => (
  <View>
    <View style={styles.wrapper}>
      <TouchableOpacity style={{ padding: 12 }}>
        <AntDesign name="arrowleft" size={12} color="black" />
      </TouchableOpacity>
      <Text>{currentDate}</Text>
      <TouchableOpacity style={{ padding: 12 }}>
        <AntDesign name="arrowright" size={12} color="black" />
      </TouchableOpacity>
    </View>

    <View style={styles.listHeader}>
      {[...Array(7)].map((_, day) => (
        <Column key={day} text={getDayText(day)} color={getDayColor(day)} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listHeader: {
    flexDirection: "row",
  },
});

export default CalendarHeader;
