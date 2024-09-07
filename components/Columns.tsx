import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ColumnProps {
  text: number | string;
  color: string;
  opacity?: number;
}

const Column = ({ text, color, opacity = 1 }: ColumnProps) => {
  return (
    <View style={styles.date}>
      <Text style={{ color, opacity }}>{text}</Text>
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  date: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
