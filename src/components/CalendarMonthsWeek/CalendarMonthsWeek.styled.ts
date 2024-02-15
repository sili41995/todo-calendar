import styled from '@emotion/styled';
import {
  ICellStyledProps,
  IMarkerStyledProps,
  INumberStyledProps,
} from './CalendarMonthsWeek.types';
import { getFlexBasisValue } from '@/utils';

export const DaysList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.cellGap}px;
`;

export const Day = styled.li<ICellStyledProps>`
  flex-basis: ${({ theme }) => getFlexBasisValue(theme.cellGap)};
  background-color: ${({ isWeekend, theme }) =>
    isWeekend
      ? theme.colors.weekendBgColor
      : theme.colors.primaryCalendarColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  padding: ${({ theme }) => theme.spacing()};
  min-height: 76px;
`;

export const Marker = styled.div<IMarkerStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-left: auto;
  border-radius: 50%;
  background-color: ${({ isCurrentDay, theme }) =>
    isCurrentDay ? theme.colors.greenColor : 'transparent'};
`;

export const Number = styled.p<INumberStyledProps>`
  color: ${({ theme, isCurrentMonth, isCurrentDay }) => {
    if (isCurrentDay) return theme.colors.primaryCalendarColor;

    return isCurrentMonth ? theme.colors.whiteColor : theme.colors.greyColor;
  }};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.43;
  text-align: end;
`;
