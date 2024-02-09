import { ClickEvent } from '@/types/types';

export interface IProps {
  targetMonth: string;
  targetYear: string;
  onIncrementBtnClick: (e: ClickEvent) => void;
  onDecrementBtnClick: (e: ClickEvent) => void;
  onTodayBtnClick: (e: ClickEvent) => void;
}
