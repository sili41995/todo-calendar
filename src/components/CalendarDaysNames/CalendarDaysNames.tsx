import { FC } from 'react';
import { format, isWeekend } from 'date-fns';
import { GeneralParams } from '@/constants';
import { IProps } from './CalendarDaysNames.types';
import { Day, Name, DaysList } from './CalendarDaysNames.styled';

const CalendarDaysNames: FC<IProps> = ({ monthsWeeks }) => (
  <DaysList>
    {monthsWeeks[0].map((day, index) => {
      const isWeekendDay = isWeekend(day);
      const dayName = format(day, GeneralParams.dayOfWeekTextFormat);

      return (
        <Day key={index} isWeekend={isWeekendDay}>
          <Name>{dayName}</Name>
        </Day>
      );
    })}
  </DaysList>
);

export default CalendarDaysNames;
