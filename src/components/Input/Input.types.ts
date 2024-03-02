import { ReactElement } from 'react';
import { InputTypes } from '@/constants';
import { InputChangeEvent } from '@/types/types';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  label?: string;
  altElem?: ReactElement;
  defaultValue?: string;
  checked?: boolean;
  accept?: string;
  onChange?: (e: InputChangeEvent) => void;
}

export interface IStyledProps {
  checked?: boolean;
}
