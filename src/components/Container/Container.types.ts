import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isEventsPage?: boolean;
}

export interface IStyledProps {
  isEventsPage?: boolean;
}
