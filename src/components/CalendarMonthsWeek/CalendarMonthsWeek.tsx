import { FC } from 'react';
import CalendarEventsList from '@/components/CalendarEventsList';
import { IProps } from './CalendarMonthsWeek.types';
import { Day, DaysList, Marker, Number } from './CalendarMonthsWeek.styled';
import { getDayParams } from '@/utils';

const CalendarMonthsWeek: FC<IProps> = ({
  week,
  monthOfCurrentPage,
  events,
}) => {
  return (
    <DaysList>
      {week.map((day, index) => {
        const {
          isWeekendDay,
          isCurrentDay,
          isCurrentMonth,
          dayNumber,
          showEventsList,
          filteredEvents,
        } = getDayParams({
          day,
          events,
          monthOfCurrentPage,
        });

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
