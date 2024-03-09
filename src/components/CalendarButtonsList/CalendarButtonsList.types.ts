import { BtnClickEvent } from '@/types/types';

export interface IProps {
  onIncrementBtnClick: (e: BtnClickEvent) => void;
  onDecrementBtnClick: (e: BtnClickEvent) => void;
  onTodayBtnClick: (e: BtnClickEvent) => void;
}
