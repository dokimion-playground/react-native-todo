import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { getDayColor } from "@/lib/utils";
import Column from "../Columns";

interface CalendarContentProps {
  date: Dayjs;
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
}

const CalendarContent = ({
  date,
  selectedDate,
  setSelectedDate,
}: CalendarContentProps) => {
  const dateText = date.date();
  const day = date.day();
  const color = getDayColor(day);
  const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
  const onPress = () => {
    setSelectedDate(date);
  };
  const isSelected = dayjs(date).isSame(selectedDate, "date");

  return (
    <Column
      color={color}
      opacity={isCurrentMonth ? 1 : 0.4}
      text={dateText}
      onPress={onPress}
      isSelected={isSelected}
    />
  );
};

export default CalendarContent;
