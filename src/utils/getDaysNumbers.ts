import { GeneralParams } from '@/constants';
import { MonthsWeeks } from '@/types/types';
import { format } from 'date-fns';

const getDaysNumbers = (monthsWeeks: MonthsWeeks): string[][] =>
  monthsWeeks.map((week) =>
    week.map((day) => format(day, GeneralParams.dayOfMonthFormat))
  );

export default getDaysNumbers;
