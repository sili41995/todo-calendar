import { FC } from 'react';
import { InputTypes } from '@/constants';
import { IProps } from './Input.types';
import {
  InputContainer,
  AltElem,
  Label,
  Title,
  StyledInput,
  ImgAltElem,
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

  if (type === InputTypes.file) {
    return (
      <ImgAltElem>
        {altElem}
        {input}
      </ImgAltElem>
    );
  }

  return label ? (
    <Label>
      <Title>{label}</Title>
      {input}
    </Label>
  ) : (
    input
  );
};

export default Input;
