import styled from '@emotion/styled';
import { IStyledProps } from './CalendarDaysNames.types';
import { getFlexBasisValue } from '@/utils';

export const DaysList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.cellGap}px;
`;

export const Day = styled.li<IStyledProps>`
  flex-basis: ${({ theme }) => getFlexBasisValue(theme.cellGap)};
  background-color: ${({ isWeekend, theme }) =>
    isWeekend
      ? theme.colors.weekendBgColor
      : theme.colors.primaryCalendarColor};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Name = styled.p`
  font-family: Manrope;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.43;
  text-align: center;
`;
