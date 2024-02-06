import { Week } from '@/types/types';

export interface IProps {
  week: Week;
  monthOfCurrentPage: number;
}

export interface IStyledProps {
  isCurrentDay: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
}
