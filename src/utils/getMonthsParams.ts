import {
  startOfMonth,
  startOfWeek,
  setDefaultOptions,
  eachDayOfInterval,
  addDays,
  format,
  // format,
} from 'date-fns';
import { enAU } from 'date-fns/locale';
import getWeeksOfMonth from './getMonthsWeeks';
import { GeneralParams } from '@/constants';
// import getNamesOfDays from './getDaysNames';
// import getNumbersOfDays from './getDaysNumbers';
import { MonthsWeeks } from '@/types/types';

export interface IMonthParams {
  monthsWeeks: MonthsWeeks;
  targetMonthNumber: string;
  targetMonthName: string;
  targetYear: string;
}

const getMonthsParams = (date: Date): IMonthParams => {
  setDefaultOptions({ locale: enAU });
  const firstMonthsDay = startOfMonth(date);
  const targetMonthNumber = format(date, GeneralParams.monthNumericFormat);
  const targetMonthName = format(date, GeneralParams.monthTextFormat);
  const targetYear = format(date, GeneralParams.yearNumericFormat);
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
    monthsWeeks,
    targetMonthNumber,
    targetMonthName,
    targetYear,
    // daysNames,
    // daysNumbers,
  };
};

export default getMonthsParams;