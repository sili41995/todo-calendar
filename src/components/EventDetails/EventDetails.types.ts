import { IEvent } from '@/types/types';

export interface IProps {
  event: IEvent;
}

export interface IStyledStatusProps {
  completed: boolean;
}

export interface IStyledDeadlineProps {
  isPast: boolean;
}
