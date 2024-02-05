import { FC } from 'react';
import { IProps } from './CalendarMonthsWeek.types';
import { format, isWeekend, isToday } from 'date-fns';
import { GeneralParams } from '@/constants';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';

const CalendarMonthsWeek: FC<IProps> = ({ week }) => {
  return (
    <DaysList>
      {week.map((day, index) => (
        <Day key={index}>
          <Marker isCurrentDay={isToday(day)} isWeekend={isWeekend(day)}>
            <Number>{format(day, GeneralParams.dayOfMonthFormat)}</Number>
          </Marker>
        </Day>
      ))}
    </DaysList>
  );
};

export default CalendarMonthsWeek;
