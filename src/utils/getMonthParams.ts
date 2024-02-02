import {
  startOfMonth,
  startOfWeek,
  setDefaultOptions,
  eachDayOfInterval,
  addDays,
  // format,
} from 'date-fns';
import { enAU } from 'date-fns/locale';
import getWeeksOfMonth from './getWeeksOfMonth';
import { GeneralParams } from '@/constants';
import getNamesOfDays from './getNamesOfDays';

export interface IMonthParams {
  weeksOfMonth: Date[][];
  namesOfDays: string[];
}

const getMonthParams = (): IMonthParams => {
  setDefaultOptions({ locale: enAU });
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  // const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);
  // const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);
  // const daysOfCurrentMonth = eachDayOfInterval({
  //   start: firstDayOfMonth,
  //   end: lastDayOfMonth,
  // });
  const amountOfDays =
    GeneralParams.calendarColumns * GeneralParams.calendarRows;
  const lastDayOfCalendarPage = addDays(firstDayOfFirstWeek, amountOfDays - 1);
  const daysOfMonth = eachDayOfInterval({
    start: firstDayOfFirstWeek,
    end: lastDayOfCalendarPage,
  });
  const weeksOfMonth = getWeeksOfMonth(daysOfMonth);
  const namesOfDays = getNamesOfDays(weeksOfMonth);

  return {
    weeksOfMonth,
    namesOfDays,
  };
};

export default getMonthParams;
