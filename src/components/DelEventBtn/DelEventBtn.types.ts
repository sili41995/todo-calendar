import { IconBtnTypes } from '@/constants';
import { BtnClickEvent } from '@/types/types';

export interface IProps {
  onClick: (e: BtnClickEvent) => void;
  iconBtnType: IconBtnTypes;
  disabled?: boolean;
}
