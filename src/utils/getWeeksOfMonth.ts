import { GeneralParams } from '@/constants';

const getWeeksOfMonth = (daysOfMonth: Date[]): Date[][] =>
  daysOfMonth.reduce(
    (acc: Date[][], day) => {
      const listOfWeeks = Array.from(acc);
      const lastWeekOfList = listOfWeeks[listOfWeeks.length - 1];
      const isFullWeek =
        lastWeekOfList.length === GeneralParams.calendarColumns;

      if (isFullWeek) {
        listOfWeeks.push([day]);
      } else {
        lastWeekOfList.push(day);
      }

      return listOfWeeks;
    },
    [[]]
  );

export default getWeeksOfMonth;
