import { AriaLabels, BtnTypes, IconBtnTypes } from '@/constants';
import { BtnClickEvent } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  type?: BtnTypes;
  ariaLabel: AriaLabels;
  icon: ReactNode;
  iconBtnType: IconBtnTypes;
  title?: string;
  disabled?: boolean;
  onClick?: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
  iconBtnType: IconBtnTypes;
}
