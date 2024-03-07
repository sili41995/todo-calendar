import { ClickEvent, Events, IMonthParams } from '@/types/types';

export interface IProps {
  events: Events;
  onIncrementBtnClick: (e: ClickEvent) => void;
  onDecrementBtnClick: (e: ClickEvent) => void;
  onTodayBtnClick: (e: ClickEvent) => void;
  monthsParams: IMonthParams;
}
