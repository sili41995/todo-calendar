import { LinkClickEvent } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  to: string;
  state?: object;
  onClick?: (e: LinkClickEvent) => void;
}
