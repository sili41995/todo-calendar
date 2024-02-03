import {
  startOfMonth,
  startOfWeek,
  setDefaultOptions,
  eachDayOfInterval,
  addDays,
  // format,
} from 'date-fns';
import { enAU } from 'date-fns/locale';
import getWeeksOfMonth from './getMonthsWeeks';
import { GeneralParams } from '@/constants';
// import getNamesOfDays from './getDaysNames';
// import getNumbersOfDays from './getDaysNumbers';
import { MonthsWeeks } from '@/types/types';

export interface IMonthParams {
  currentDate: Date;
  monthsWeeks: MonthsWeeks;
  // daysNames: string[];
  // daysNumbers: string[][];
}

const getMonthsParams = (): IMonthParams => {
  setDefaultOptions({ locale: enAU });
  const currentDate = new Date();
  const firstMonthsDay = startOfMonth(currentDate);
  // const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfFirstWeek = startOfWeek(firstMonthsDay);
  // const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);
  // const daysOfCurrentMonth = eachDayOfInterval({
  //   start: firstDayOfMonth,
  //   end: lastDayOfMonth,
  // });
  const amountOfDays =
    GeneralParams.calendarColumns * GeneralParams.calendarRows;
  const lastDayOfCalendarPage = addDays(firstDayOfFirstWeek, amountOfDays - 1);
  const monthsDays = eachDayOfInterval({
    start: firstDayOfFirstWeek,
    end: lastDayOfCalendarPage,
  });
  const monthsWeeks = getWeeksOfMonth(monthsDays);
  // const daysNames = getNamesOfDays(monthsWeeks);
  // const daysNumbers = getNumbersOfDays(monthsWeeks);

  return {
    currentDate,
    monthsWeeks,
    // daysNames,
    // daysNumbers,
  };
};

export default getMonthsParams;
