import { Events, Week } from '@/types/types';

export interface IProps {
  week: Week;
  monthOfCurrentPage: number;
  events: Events;
}

export interface IStyledProps {
  isCurrentDay: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
}
