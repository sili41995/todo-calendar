import { BtnClickEvent } from '@/types/types';

export interface IProps {
  targetMonth: string;
  targetYear: string;
  onIncrementBtnClick: (e: BtnClickEvent) => void;
  onDecrementBtnClick: (e: BtnClickEvent) => void;
  onTodayBtnClick: (e: BtnClickEvent) => void;
}
