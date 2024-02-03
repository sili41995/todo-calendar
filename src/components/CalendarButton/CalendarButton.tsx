import { ButtonTypes } from '@/constants';
import { FC } from 'react';
import { StyledButton } from './CalendarButton.styled';
import { IProps } from './CalendarButton.types';

const CalendarButton: FC<IProps> = ({
  type = ButtonTypes.button,
  ariaLabel,
  onClick,
  title,
  width,
}) => (
  <StyledButton
    type={type}
    onClick={onClick}
    aria-label={ariaLabel}
    width={width}
  >
    {title}
  </StyledButton>
);

export default CalendarButton;
