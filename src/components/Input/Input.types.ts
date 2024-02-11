import { ChangeEvent, ReactElement } from 'react';
import { InputTypes } from '@/constants';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactElement;
  inputWrap?: boolean;
  autoFocus?: boolean;
  btnIcon?: ReactElement | boolean;
  accept?: string;
  altElem?: ReactElement;
  value?: string;
  defaultValue?: string;
  checked?: boolean;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  checked?: boolean;
}
