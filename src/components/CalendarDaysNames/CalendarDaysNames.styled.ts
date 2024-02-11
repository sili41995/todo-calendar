import styled from '@emotion/styled';
import { IStyledProps } from './CalendarDaysNames.types';

export const DaysList = styled.ul`
  /* display: flex; */
  /* gap: 1px; */
`;

export const Day = styled.li`
  /* flex-basis: calc((100% - 6px) / 7); */
  /* background-color: #101112; */
  /* border-radius: 10px; */
  /* padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(2)}`}; */
`;

export const Name = styled.p<IStyledProps>`
  /* font-family: Manrope; */
  /* color: ${({ isWeekend }) => (isWeekend ? '#ED3779' : '#ffffff')}; */
  /* font-size: 18px; */
  /* font-weight: 600; */
  /* line-height: 1.43; */
  /* text-align: center; */
`;
