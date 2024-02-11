import { FC } from 'react';
import { IProps } from './CalendarMonthsWeek.types';
import { format, isWeekend, isToday, getMonth, getDayOfYear } from 'date-fns';
import { GeneralParams } from '@/constants';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';
import CalendarEventsList from '@/components/CalendarEventsList';

const CalendarMonthsWeek: FC<IProps> = ({
  week,
  monthOfCurrentPage,
  events,
}) => {
  return (
    <DaysList>
      {week.map((day, index) => {
        const filteredEvents = events.filter(
          ({ deadline }) => getDayOfYear(deadline) === getDayOfYear(day)
        );
        const showEventsList = Boolean(filteredEvents.length);

        return (
          <Day key={index} isWeekend={isWeekend(day)}>
            <Marker isCurrentDay={isToday(day)}>
              <Number isCurrentMonth={monthOfCurrentPage === getMonth(day)}>
                {format(day, GeneralParams.dayOfMonthNumericFormat)}
              </Number>
            </Marker>
            {showEventsList && <CalendarEventsList events={filteredEvents} />}
          </Day>
        );
      })}
    </DaysList>
  );
};

export default CalendarMonthsWeek;
