import PagePaths from '@/constants/pagePaths';
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

export interface IDeadlineParams {
  taskDeadline: string;
  isPastDate: boolean;
}

export interface IGetDayParamsProps {
  day: Date;
  events: Events;
  monthOfCurrentPage: number;
}

export interface IDayParams {
  isWeekendDay: boolean;
  isCurrentDay: boolean;
  isCurrentMonth: boolean;
  dayNumber: string;
  showEventsList: boolean;
  filteredEvents: Events;
}

export interface INavLink {
  title: string;
  path: PagePaths;
}

export type NavLinks = Readonly<INavLink[]>;
