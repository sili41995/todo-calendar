import { GeneralParams } from '@/constants';
import { MonthsWeeks } from '@/types/types';

const getMonthsWeeks = (monthsDays: Date[]): MonthsWeeks =>
  monthsDays.reduce(
    (acc: MonthsWeeks, day) => {
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

export default getMonthsWeeks;
