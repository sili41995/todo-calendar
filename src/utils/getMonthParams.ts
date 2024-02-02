import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  setDefaultOptions,
  eachDayOfInterval,
  // format,
} from 'date-fns';
import { es } from 'date-fns/locale';
import getWeeksOfMonth from './getWeeksOfMonth';

export interface IMonthParams {
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
  firstDayOfFirstWeek: Date;
  lastDayOfLastWeek: Date;
  daysOfCurrentMonth: Date[];
  daysOfMonth: Date[];
}

const getMonthParams = (): IMonthParams => {
  setDefaultOptions({ locale: es });
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);
  const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);
  const daysOfCurrentMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const daysOfMonth = eachDayOfInterval({
    start: firstDayOfFirstWeek,
    end: lastDayOfLastWeek,
  });
  const weeksOfMonth = getWeeksOfMonth(daysOfMonth);

  console.log(weeksOfMonth);

  return {
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayOfFirstWeek,
    lastDayOfLastWeek,
    daysOfCurrentMonth,
    daysOfMonth,
  };
};

export default getMonthParams;
