import { GeneralParams } from '@/constants';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  setDefaultOptions,
  format,
} from 'date-fns';
import { es } from 'date-fns/locale';

export interface IMonthParams {
  firstDayOfMonth: string;
  lastDayOfMonth: string;
  firstDayOfFirstWeek: string;
  lastDayOfLastWeek: string;
}

const getMonthParams = (): IMonthParams => {
  setDefaultOptions({ locale: es });
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const firstDayOfFirstWeek = startOfWeek(firstDayOfMonth);
  const lastDayOfLastWeek = endOfWeek(lastDayOfMonth);

  return {
    firstDayOfMonth: format(firstDayOfMonth, GeneralParams.dateFormat),
    lastDayOfMonth: format(lastDayOfMonth, GeneralParams.dateFormat),
    firstDayOfFirstWeek: format(firstDayOfFirstWeek, GeneralParams.dateFormat),
    lastDayOfLastWeek: format(lastDayOfLastWeek, GeneralParams.dateFormat),
  };
};

export default getMonthParams;
