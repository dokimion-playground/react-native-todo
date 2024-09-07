import React from "react";
import { FlatList, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { getCalendarColumns } from "@/lib/utils";
import CalendarHeader from "./CalendarHeader";
import CalendarContent from "./CalendarContent";

const Calendar = () => {
  const now = dayjs();
  const columns = getCalendarColumns(now);
  const currentDate = now.format("YYYY.MM.DD");

  const renderItem = ({ item }: { item: dayjs.Dayjs }) => {
    return <CalendarContent now={item} />;
  };

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
