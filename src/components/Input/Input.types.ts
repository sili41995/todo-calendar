import { ReactElement } from 'react';
import { InputTypes } from '@/constants';
import { InputChangeEvent } from '@/types/types';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  label: string;
  // icon?: ReactElement;
  // autoFocus?: boolean;
  // btnIcon?: ReactElement | boolean;
  // accept?: string;
  altElem?: ReactElement;
  // value?: string;
  // defaultValue?: string;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export interface IStyledProps {
  checked?: boolean;
}
