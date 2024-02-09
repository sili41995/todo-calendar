import { FC } from 'react';
import { IProps } from './CalendarMonthsWeek.types';
import { format, isWeekend, isToday, getMonth, getDayOfYear } from 'date-fns';
import { GeneralParams } from '@/constants';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';
import CalendarEventsList from '@/components/CalendarEventsList';

const CalendarMonthsWeek: FC<IProps> = ({
  week,
  monthOfCurrentPage,
  todos,
}) => {
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
            <CalendarEventsList
              todos={todos.filter(
                ({ deadline }) => getDayOfYear(deadline) === getDayOfYear(day)
              )}
            />
          </Day>
        );
      })}
    </DaysList>
  );
};

export default CalendarMonthsWeek;
