import { ClickEvent } from '@/types/types';

export interface IProps {
  onAcceptBtnClick: (e: ClickEvent) => void;
  onResetBtnClick: (e: ClickEvent) => void;
}
