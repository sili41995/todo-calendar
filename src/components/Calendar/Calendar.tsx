import CalendarTitle from '@/components/CalendarTitle';
import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getMonthsParams, makeBlur } from '@/utils';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { Container, DaysContainer } from './Calendar.styled';
import { useState } from 'react';
import { addMonths } from 'date-fns';
import { ClickEvent } from '@/types/types';

const Calendar = () => {
  const [date, setDate] = useState(() => new Date());
  const { monthsWeeks } = getMonthsParams(date);

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
      <CalendarTitle />
      <CalendarControls
        date={date}
        onIncrementBtnClick={onIncrementBtnClick}
        onDecrementBtnClick={onDecrementBtnClick}
        onTodayBtnClick={onTodayBtnClick}
      />
      <DaysContainer>
        <CalendarDaysNames monthsWeeks={monthsWeeks} />
        <CalendarDaysList monthsWeeks={monthsWeeks} />
      </DaysContainer>
    </Container>
  );
};

export default Calendar;
