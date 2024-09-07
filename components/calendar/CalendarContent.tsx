import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { getDayColor } from "@/lib/utils";
import Column from "../Columns";

interface CalendarContentProps {
  now: Dayjs;
}

const CalendarContent = ({ now }: CalendarContentProps) => {
  const dateText = now.date();
  const day = now.day();
  const color = getDayColor(day);
  const opacity = now.isSame(dayjs(), "month") ? 1 : 0.3;

  return <Column color={color} opacity={opacity} text={dateText} />;
};

export default CalendarContent;
