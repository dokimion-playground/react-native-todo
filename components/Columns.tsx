import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ColumnProps {
  text: number | string;
  color: string;
  opacity?: number;
  disabled?: boolean;
  onPress?: () => void;
  isSelected?: boolean;
}

const Column = ({
  text,
  color,
  opacity = 1,
  disabled = false,
  onPress,
  isSelected = false,
}: ColumnProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.date,
        { backgroundColor: isSelected ? "#c2c2c2" : "transparent" },
      ]}
    >
      <Text style={{ color, opacity }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Column;

const styles = StyleSheet.create({
  date: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
});
