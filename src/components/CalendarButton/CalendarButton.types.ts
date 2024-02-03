import { AriaLabels, ButtonTypes } from '@/constants';
import { ClickEvent } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  type?: ButtonTypes;
  ariaLabel: AriaLabels;
  title: string | ReactNode;
  width: number;
  onClick: (e: ClickEvent) => void;
}

export interface IStyledProps {
  width: number;
}
