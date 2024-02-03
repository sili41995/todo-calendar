import { ClickEvent } from '@/types/types';

export interface IProps {
  date: Date;
  onIncrementBtnClick: (e: ClickEvent) => void;
  onDecrementBtnClick: (e: ClickEvent) => void;
  onTodayBtnClick: (e: ClickEvent) => void;
}
