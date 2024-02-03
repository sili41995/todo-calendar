import styled from '@emotion/styled';
import { IStyledProps } from './CalendarButton.types';

export const StyledButton = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: 100%;
  padding: 4px;
  border-color: transparent;
  border-radius: 8px;
  background-color: #3470ff;
  color: #ffffff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:is(:hover, :focus) {
    background-color: #0b44cd;
  }
`;
