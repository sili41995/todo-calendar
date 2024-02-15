import { ChangeEvent, MouseEvent } from 'react';

export type Week = Date[];

export type MonthsWeeks = Week[];

export type ClickEvent = MouseEvent<HTMLButtonElement>;

export interface IEvent {
  deadline: string;
  task: string;
  completed: boolean;
  id: string;
}

export type NewEvent = Omit<IEvent, 'id'>;

export type Events = IEvent[];

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IUpdateEvent {
  event: NewEvent;
  id: string;
}
