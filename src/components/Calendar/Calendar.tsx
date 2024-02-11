import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getFilteredEvents, getMonthsParams, makeBlur } from '@/utils';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { Container, ControlsContainer, DaysContainer } from './Calendar.styled';
import { FC, useState } from 'react';
import { addMonths } from 'date-fns';
import { ClickEvent } from '@/types/types';
import { IProps } from './Calendar.types';

const Calendar: FC<IProps> = ({ events }) => {
  const [date, setDate] = useState(() => new Date());
  const { monthsWeeks, targetMonthNumber, targetMonthName, targetYear } =
    getMonthsParams(date);

  const filteredEvents = getFilteredEvents({
    events,
    targetMonthNumber,
    targetYear,
  });

  const onIncrementBtnClick = (e: ClickEvent) => {
    setDate((prevState) => addMonths(prevState, 1));
    makeBlur(e.currentTarget);
  };

  const onDecrementBtnClick = (e: ClickEvent) => {
    setDate((prevState) => addMonths(prevState, -1));
    makeBlur(e.currentTarget);
  };

  const onTodayBtnClick = (e: ClickEvent) => {
    setDate(new Date());
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <ControlsContainer>
        <CalendarControls
          targetMonth={targetMonthName}
          targetYear={targetYear}
          onIncrementBtnClick={onIncrementBtnClick}
          onDecrementBtnClick={onDecrementBtnClick}
          onTodayBtnClick={onTodayBtnClick}
        />
      </ControlsContainer>
      <DaysContainer>
        <CalendarDaysNames monthsWeeks={monthsWeeks} />
        <CalendarDaysList monthsWeeks={monthsWeeks} events={filteredEvents} />
      </DaysContainer>
    </Container>
  );
};

export default Calendar;
