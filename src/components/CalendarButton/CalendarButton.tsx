import { FC } from 'react';
import { ButtonTypes } from '@/constants';
import { IProps } from './CalendarButton.types';
import { StyledButton } from './CalendarButton.styled';

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
