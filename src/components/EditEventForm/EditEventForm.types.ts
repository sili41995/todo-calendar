import { FormTypes } from '@/constants';
import { IEvent } from '@/types/types';

export interface IProps {
  event: IEvent;
  formType: FormTypes;
  setEvent?: (event: IEvent) => void;
}
