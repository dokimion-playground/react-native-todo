import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export default function useCalender() {
  const now = dayjs();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(now);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const selectedDay = dayjs(date);
    console.log("selectedDay", selectedDay);
    setSelectedDate(selectedDay);
    hideDatePicker();
  };

  return {
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    selectedDate,
    setSelectedDate,
    handleConfirm,
  };
}

const styles = StyleSheet.create({});
