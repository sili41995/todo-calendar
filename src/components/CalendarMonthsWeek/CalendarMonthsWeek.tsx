import { FC } from 'react';
import { IProps } from './CalendarMonthsWeek.types';
import { format, isWeekend, isToday, getMonth } from 'date-fns';
import { GeneralParams } from '@/constants';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';

const CalendarMonthsWeek: FC<IProps> = ({ week, monthOfCurrentPage }) => {
  return (
    <DaysList>
      {week.map((day, index) => {
        return (
          <Day
            key={index}
            isCurrentMonth={monthOfCurrentPage === getMonth(day)}
            isCurrentDay={isToday(day)}
            isWeekend={isWeekend(day)}
          >
            <Marker>
              <Number>
                {format(day, GeneralParams.dayOfMonthNumericFormat)}
              </Number>
            </Marker>
          </Day>
        );
      })}
    </DaysList>
  );
};

export default CalendarMonthsWeek;
