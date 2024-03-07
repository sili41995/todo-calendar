import {
  startOfMonth,
  startOfWeek,
  setDefaultOptions,
  eachDayOfInterval,
  addDays,
  format,
} from 'date-fns';
import { enAU } from 'date-fns/locale';
import getWeeksOfMonth from './getMonthsWeeks';
import { GeneralParams } from '@/constants';
import { IGetMonthsParamsProps, IMonthParams } from '@/types/types';

const getMonthsParams = ({
  month,
  year,
}: IGetMonthsParamsProps): IMonthParams => {
  setDefaultOptions({ locale: enAU });
  const newDate = new Date(`${year}-${month}`);
  const isInvalidDate = newDate.toDateString() === 'Invalid Date';
  const targetDate = isInvalidDate ? new Date() : newDate;
  const firstMonthsDay = startOfMonth(targetDate);
  const targetMonthNumber = format(
    targetDate,
    GeneralParams.monthNumericFormat
  );
  const targetMonthName = format(targetDate, GeneralParams.monthTextFormat);
  const targetYear = format(targetDate, GeneralParams.yearNumericFormat);
  const firstDayOfFirstWeek = startOfWeek(firstMonthsDay);
  const amountOfDays =
    GeneralParams.calendarColumns * GeneralParams.calendarRows;
  const lastDayOfCalendarPage = addDays(firstDayOfFirstWeek, amountOfDays - 1);
  const monthsDays = eachDayOfInterval({
    start: firstDayOfFirstWeek,
    end: lastDayOfCalendarPage,
  });
  const monthsWeeks = getWeeksOfMonth(monthsDays);

  return {
    targetDate,
    monthsWeeks,
    targetMonthNumber,
    targetMonthName,
    targetYear,
  };
};

export default getMonthsParams;
