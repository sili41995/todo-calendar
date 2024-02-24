import { IconBtnTypes } from '@/constants';
import { ClickEvent } from '@/types/types';

export interface IProps {
  onClick: (e: ClickEvent) => void;
  iconBtnType: IconBtnTypes;
}
