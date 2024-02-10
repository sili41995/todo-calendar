import styled from '@emotion/styled';
import { IStyledProps } from './CalendarMonthsWeek.types';

export const DaysList = styled.ul`
  display: flex;
  gap: 1px;
`;

export const Day = styled.li<IStyledProps>`
  flex-basis: calc((100% - 6px) / 7);
  background-color: #101112;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};

  & > div {
    background-color: ${({ isCurrentDay }) =>
      isCurrentDay ? '#ED3779' : 'transparent'};

    & p {
      font-weight: ${({ isCurrentMonth }) => (isCurrentMonth ? 700 : 500)};
      color: ${({ isWeekend, isCurrentDay, isCurrentMonth }) => {
        if (!isCurrentMonth) {
          return '#888888';
        }

        if (isCurrentDay) {
          return '#ffffff';
        }

        return isWeekend ? '#ED3779' : '#ffffff';
      }};
    }
  }
`;

export const Marker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-left: auto;
  border-radius: 50%;
`;

export const Number = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-align: end;
`;
