import styled from '@emotion/styled';
import { IStyledProps } from './CalendarMonthsWeek.types';

export const DaysList = styled.ul`
  display: flex;
  gap: 1px;
`;

export const Day = styled.li`
  flex-basis: calc((100% - 6px) / 7);
  height: 100px;
  background-color: #101112;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Number = styled.p<IStyledProps>`
  font-family: Manrope;
  color: ${({ isWeekend }) => (isWeekend ? '#ED3779' : '#ffffff')};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-align: end;
`;
