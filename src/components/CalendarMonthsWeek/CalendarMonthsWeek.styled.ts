import styled from '@emotion/styled';
import {
  ICellStyledProps,
  IMarkerStyledProps,
  INumberStyledProps,
} from './CalendarMonthsWeek.types';
import { GeneralParams } from '@/constants';

export const DaysList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.cellGap}px;
`;

export const Day = styled.li<ICellStyledProps>`
  flex-basis: ${({ theme }) =>
    `calc((100% - ${(GeneralParams.calendarColumns - 1) * theme.cellGap}px) / ${
      GeneralParams.calendarColumns
    })`};
  background-color: ${({ isWeekend, theme }) =>
    isWeekend ? theme.colors.weekendBgColor : theme.colors.weekdayBgColor};
  border-radius: 8px;
`;

export const Marker = styled.div<IMarkerStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: ${({ theme }) => `${theme.spacing()} ${theme.spacing()} 0 auto`};
  border-radius: 50%;
  background-color: ${({ isCurrentDay, theme }) =>
    isCurrentDay ? theme.colors.currentDayMarkerColor : 'transparent'};
`;

export const Number = styled.p<INumberStyledProps>`
  color: ${({ theme, isCurrentMonth }) =>
    isCurrentMonth ? theme.colors.whiteColor : theme.colors.greyColor};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-align: end;
`;
