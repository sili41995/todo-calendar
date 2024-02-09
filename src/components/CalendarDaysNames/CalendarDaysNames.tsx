import { FC } from 'react';
import { IProps } from './CalendarDaysNames.types';
import { Day, Name, DaysList } from './CalendarDaysNames.styled';
import { format, isWeekend } from 'date-fns';
import { GeneralParams } from '@/constants';

const CalendarDaysNames: FC<IProps> = ({ monthsWeeks }) => {
  return (
    <DaysList>
      {monthsWeeks[0].map((day, index) => (
        <Day key={index}>
          <Name isWeekend={isWeekend(day)}>
            {format(day, GeneralParams.dayOfWeekTextFormat)}
          </Name>
        </Day>
      ))}
    </DaysList>
  );
};

export default CalendarDaysNames;