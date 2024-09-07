import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { getCalendarColumns } from "@/lib/utils";
import CalendarHeader from "./CalendarHeader";
import CalendarContent from "./CalendarContent";
import useCalender from "@/hooks/useCalender";
import { Dayjs } from "dayjs";

const Calendar = () => {
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
  } = useCalender();
  const columns = getCalendarColumns(selectedDate);

  const renderItem = ({ item: date }: { item: Dayjs }) => {
    return (
      <CalendarContent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        date={date}
      />
    );
  };

  return (
    <FlatList
      data={columns}
      keyExtractor={(item) => item.format("YYYY-MM-DD")}
      renderItem={renderItem}
      numColumns={7}
      ListHeaderComponent={
        <CalendarHeader
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          isDatePickerVisible={isDatePickerVisible}
          showDatePicker={showDatePicker}
          hideDatePicker={hideDatePicker}
          handleConfirm={handleConfirm}
        />
      }
    />
  );
};

export default Calendar;
