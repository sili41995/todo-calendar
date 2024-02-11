import { Events, Week } from '@/types/types';

export interface IProps {
  week: Week;
  monthOfCurrentPage: number;
  events: Events;
}

export interface ICellStyledProps {
  isWeekend: boolean;
}

export interface IMarkerStyledProps {
  isCurrentDay: boolean;
}

export interface INumberStyledProps {
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
}
