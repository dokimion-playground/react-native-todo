import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import dayjs, { Dayjs } from "dayjs";
import { getCalendarColumns } from "@/lib/utils";
import CalendarHeader from "./CalendarHeader";
import CalendarContent from "./CalendarContent";

const Calendar = () => {
  const now = dayjs();

  const [selectedDate, setSelectedDate] = useState(now);
  const columns = getCalendarColumns(selectedDate);
  const currentDate = selectedDate.format("YYYY.MM.DD");

  const renderItem = ({ item: date }: { item: Dayjs }) => {
    return (
      <CalendarContent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        date={date}
      />
    );
  };

  console.log(selectedDate);

  return (
    <FlatList
      data={columns}
      keyExtractor={(item) => item.format("YYYY-MM-DD")}
      renderItem={renderItem}
      numColumns={7}
      ListHeaderComponent={<CalendarHeader currentDate={currentDate} />}
    />
  );
};

export default Calendar;
