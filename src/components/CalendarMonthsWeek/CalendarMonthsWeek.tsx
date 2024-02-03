import { FC } from 'react';
import { IProps } from './CalendarMonthsWeek.types';
import { format, isWeekend } from 'date-fns';
import { GeneralParams } from '@/constants';
import { Day, DaysList, Number } from './CalendarMonthsWeek.styled';

const CalendarMonthsWeek: FC<IProps> = ({ week }) => {
  return (
    <DaysList>
      {week.map((day, index) => (
        <Day key={index}>
          <Number isWeekend={isWeekend(day)}>
            {format(day, GeneralParams.dayOfMonthFormat)}
          </Number>
        </Day>
      ))}
    </DaysList>
  );
};

export default CalendarMonthsWeek;
