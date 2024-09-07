import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getDayColor, getDayText } from "@/lib/utils";
import Column from "../Columns";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dayjs } from "dayjs";

interface CalendarHeaderProps {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
  isDatePickerVisible: boolean;
  showDatePicker: () => void;
  hideDatePicker: () => void;
  handleConfirm: (date: Date) => void;
}

const CalendarHeader = ({
  selectedDate,
  setSelectedDate,
  isDatePickerVisible,
  showDatePicker,
  hideDatePicker,
  handleConfirm,
}: CalendarHeaderProps) => {
  const onPressLeftArrow = () => {
    const newSelectedDate = selectedDate.subtract(1, "month");
    setSelectedDate(newSelectedDate);
  };

  const onPressRightArrow = () => {
    const newSelectedDate = selectedDate.add(1, "month");
    setSelectedDate(newSelectedDate);
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <TouchableOpacity style={{ padding: 14 }} onPress={onPressLeftArrow}>
          <AntDesign name="arrowleft" size={12} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={showDatePicker}>
          <Text>{selectedDate.format("YYYY.MM.DD")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 12 }} onPress={onPressRightArrow}>
          <AntDesign name="arrowright" size={14} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        {[...Array(7)].map((_, day) => (
          <Column
            key={day}
            text={getDayText(day)}
            color={getDayColor(day)}
            disabled={true}
          />
        ))}
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

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
