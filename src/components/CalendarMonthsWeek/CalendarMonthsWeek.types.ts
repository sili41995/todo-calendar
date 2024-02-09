import { Todos, Week } from '@/types/types';

export interface IProps {
  week: Week;
  monthOfCurrentPage: number;
  todos: Todos;
}

export interface IStyledProps {
  isCurrentDay: boolean;
  isWeekend: boolean;
  isCurrentMonth: boolean;
}
