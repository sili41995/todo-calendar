import { BtnClickEvent, Events, IMonthParams } from '@/types/types';

export interface IProps {
  events: Events;
  onIncrementBtnClick: (e: BtnClickEvent) => void;
  onDecrementBtnClick: (e: BtnClickEvent) => void;
  onTodayBtnClick: (e: BtnClickEvent) => void;
  monthsParams: IMonthParams;
}
