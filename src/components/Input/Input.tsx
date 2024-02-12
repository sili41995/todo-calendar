import { FC } from 'react';
import { IProps } from './Input.types';
import { InputTypes } from '@/constants';
import {
  InputContainer,
  AltElem,
  Label,
  Title,
  StyledInput,
} from './Input.styled';

const Input: FC<IProps> = ({
  settings,
  type,
  altElem,
  checked,
  label,
  ...otherProps
}) => {
  const input = (
    <StyledInput type={type} checked={checked} {...settings} {...otherProps} />
  );

  if (type === InputTypes.checkbox) {
    return (
      <InputContainer>
        <Title>{label}</Title>
        <AltElem checked={checked}>
          {altElem}
          {input}
        </AltElem>
      </InputContainer>
    );
  }

  return (
    <>
      <Label>
        <Title>{label}</Title>
        {input}
      </Label>
    </>
  );
};

export default Input;
