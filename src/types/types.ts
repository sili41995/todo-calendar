import { MouseEvent } from 'react';

export type Week = Date[];

export type MonthsWeeks = Week[];

export type ClickEvent = MouseEvent<HTMLButtonElement>;

export interface IEvent {
  deadline: string;
  task: string;
  completed: true;
  id: string;
}

export type Events = IEvent[];
