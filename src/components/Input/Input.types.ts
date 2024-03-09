import { ReactElement } from 'react';
import { FormTypes, InputTypes } from '@/constants';
import { InputChangeEvent } from '@/types/types';

export interface IProps {
  formType: FormTypes;
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  label?: string;
  altElem?: ReactElement;
  defaultValue?: string;
  checked?: boolean;
  accept?: string;
  autoFocus?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export interface IStyledInputProps {
  formType: FormTypes;
}

export interface IStyledAltElemProps {
  checked: boolean | undefined;
}
