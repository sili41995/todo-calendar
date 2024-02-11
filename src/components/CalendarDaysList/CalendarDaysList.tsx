import { FC } from 'react';
import { IProps } from './CalendarDaysList.types';
import CalendarMonthsWeek from '@/components/CalendarMonthsWeek';
import { Week, WeeksList } from './CalendarDaysList.styled';
import { getMonth } from 'date-fns';

const CalendarDaysList: FC<IProps> = ({ monthsWeeks, events }) => {
  const monthOfCurrentPage = getMonth(monthsWeeks[2][0]);
  return (
    <WeeksList>
      {monthsWeeks.map((week, index) => (
        <Week key={index}>
          <CalendarMonthsWeek
            week={week}
            events={events}
            monthOfCurrentPage={monthOfCurrentPage}
          />
        </Week>
      ))}
    </WeeksList>
  );
};

export default CalendarDaysList;
