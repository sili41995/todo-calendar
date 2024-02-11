import styled from '@emotion/styled';
import { IStyledProps } from './CalendarButton.types';

export const StyledButton = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: 100%;
  padding: ${({ theme }) => theme.spacing()};
  border-color: transparent;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
