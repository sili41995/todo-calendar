import { FC } from 'react';
import { IProps } from './CalendarDaysList.types';
import CalendarMonthsWeek from '@/components/CalendarMonthsWeek';
import { Week, WeeksList } from './CalendarDaysList.styled';

const CalendarDaysList: FC<IProps> = ({ monthsWeeks }) => {
  return (
    <WeeksList>
      {monthsWeeks.map((week, index) => (
        <Week key={index}>
          <CalendarMonthsWeek week={week} />
        </Week>
      ))}
    </WeeksList>
  );
};

export default CalendarDaysList;
