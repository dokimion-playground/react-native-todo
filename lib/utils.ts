import dayjs, { Dayjs } from "dayjs";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export const useInsets = (): {
  statusBarHeight: number;
  bottomSpace: number;
} => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const bottomSpace = insets.bottom;
  return { statusBarHeight, bottomSpace };
};

export const ITEM_WIDTH = 220;

export const fillEmptyColumns = (
  columns: Dayjs[],
  start: Dayjs,
  end: Dayjs
): Dayjs[] => {
  const filledColumns = columns.slice(0);

  // 첫날 이전 공백 채우기
  const startDay = start.get("day");
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }

  const endDay = end.get("day");

  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }

  return filledColumns;
};

export const getCalendarColumns = (now: Dayjs): Dayjs[] => {
  const start = dayjs(now).startOf("month"); // 11.1
  const end = dayjs(now).endOf("month"); // 11.30
  const endDate = end.get("date"); // 30

  const columns: dayjs.Dayjs[] = [];
  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }

  const filledColumns = fillEmptyColumns(columns, start, end);

  return filledColumns;
};

const dayTexts = ["일", "월", "화", "수", "목", "금", "토"];
export const getDayText = (day: number): string => {
  return dayTexts[day];
};

export const getDayColor = (day: number): string => {
  switch (day) {
    case 0:
      return "#e67639";
    case 6:
      return "#5872d1";
    default:
      return "#2b2b2b";
  }
};
