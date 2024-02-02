import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  setDefaultOptions,
} from 'date-fns';
import { es } from 'date-fns/locale';

export interface IMonthParams {
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
  firstDayOfFirstWeek: Date;
  lastDayOfLastWeek: Date;
}

const getMonthParams = (): IMonthParams => {
  setDefaultOptions({ locale: es });
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);
  const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);

  return {
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayOfFirstWeek,
    lastDayOfLastWeek,
  };
};

export default getMonthParams;
