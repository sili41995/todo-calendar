import { Func, IEvent } from '@/types/types';

export interface IProps {
  event: IEvent;
  setModalWinState?: Func;
  setEvent?: (event: IEvent) => void;
}
