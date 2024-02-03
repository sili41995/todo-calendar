import { GeneralParams } from '@/constants';
import { MonthsWeeks } from '@/types/types';
import { format } from 'date-fns';

const getDaysNames = (monthsWeeks: MonthsWeeks) =>
  monthsWeeks[0].map((day) => format(day, GeneralParams.dayOfWeekFormat));

export default getDaysNames;
