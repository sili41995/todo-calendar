import { MouseEvent } from 'react';

export type Week = Date[];

export type MonthsWeeks = Week[];

export type ClickEvent = MouseEvent<HTMLButtonElement>;

export interface ITodo {
  deadline: string;
  task: string;
  completed: true;
  id: '1';
}

export type Todos = ITodo[];
