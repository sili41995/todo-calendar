import { FC } from 'react';
import { format, isWeekend, isToday, getMonth, getDayOfYear } from 'date-fns';
import { GeneralParams } from '@/constants';
import CalendarEventsList from '@/components/CalendarEventsList';
import { IProps } from './CalendarMonthsWeek.types';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';

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
        const isCurrentDay = isToday(day);
        const isWeekendDay = isWeekend(day);
        const isCurrentMonth = monthOfCurrentPage === getMonth(day);
        const dayNumber = format(day, GeneralParams.dayOfMonthNumericFormat);

        return (
          <Day key={index} isWeekend={isWeekendDay}>
            <Marker isCurrentDay={isCurrentDay}>
              <Number
                isCurrentDay={isCurrentDay}
                isCurrentMonth={isCurrentMonth}
              >
                {dayNumber}
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
