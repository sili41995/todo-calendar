import { FC } from 'react';
import { IProps } from './Input.types';
import { InputTypes } from '@/constants';
import { Label, StyledInput } from './Input.styled';

const Input: FC<IProps> = ({
  settings,
  type,
  altElem,
  checked,
  ...otherProps
}) => {
  const input = (
    <StyledInput type={type} checked={checked} {...settings} {...otherProps} />
  );

  if (type === InputTypes.checkbox) {
    return (
      <Label checked={checked}>
        {altElem}
        {input}
      </Label>
    );
  }

  return input;
};

export default Input;
