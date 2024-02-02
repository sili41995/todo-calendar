import { GeneralParams } from '@/constants';
import { format } from 'date-fns';

const getNamesOfDays = (weeksOfMonth: Date[][]) =>
  weeksOfMonth[0].map((day) => format(day, GeneralParams.dayFormat));

export default getNamesOfDays;
