import { AriaLabels, BtnTypes, IconBtnTypes } from '@/constants';
import { ClickEvent } from '@/types/types';
import { ReactNode } from 'react';

export interface IProps {
  type?: BtnTypes;
  ariaLabel: AriaLabels;
  icon: ReactNode;
  iconBtnType: IconBtnTypes;
  onClick?: (e: ClickEvent) => void;
}

export interface IStyledProps {
  iconBtnType: IconBtnTypes;
}
