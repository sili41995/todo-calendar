import { PagePaths } from '@/constants';
import { ChangeEvent, MouseEvent, RefObject } from 'react';

export type Week = Date[];

export type MonthsWeeks = Week[];

export type ClickEvent = MouseEvent<HTMLButtonElement>;

export interface IEvent {
  deadline: string;
  task: string;
  completed: boolean;
  _id: string;
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

export interface IGetIsTargetPageProps {
  pathname: string;
  targetPage: string;
}

export type Func = () => void;

export type DeleteFunc = (id: string) => void;

export interface IQueryKey {
  queryKey: [string, string];
}

export interface IOnChangeAvatar {
  e: ChangeEvent<HTMLInputElement>;
  ref: RefObject<HTMLImageElement>;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface ISignUpCredentials extends ICredentials {
  [key: string]: string | FileList | undefined;
  name: string;
  passwordRepeat: string;
  avatar: FileList | string;
}

export type User = Pick<ISignUpCredentials, 'name' | 'email' | 'avatar'>;

export interface IRegExp {
  emailRegExp: RegExp;
}

export type NewUser = Omit<ISignUpCredentials, 'password' | 'passwordRepeat'>;

export interface IToken {
  token: string;
}

export interface IAuthData {
  isLoggedIn: boolean;
  user: User;
}

export interface IEventsInfo {
  events: Events;
  count: number;
}

export interface IFetchEventByIdProps {
  id: string;
}
