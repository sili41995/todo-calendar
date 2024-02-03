import styled from '@emotion/styled';
import { IStyledProps } from './CalendarDaysNames.types';

export const DaysList = styled.ul`
  display: flex;
  gap: 1px;
`;

export const Day = styled.li`
  flex-basis: calc((100% - 6px) / 7);
  background-color: #101112;
  border-radius: 10px;
  padding: ${({ theme }) => `${theme.spacing(6)} ${theme.spacing(2)}`};
`;

export const Name = styled.p<IStyledProps>`
  color: ${({ isWeekend }) => (isWeekend ? '#ED3779' : '#ffffff')};
  text-align: center;
`;
