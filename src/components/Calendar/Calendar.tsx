import CalendarTitle from '@/components/CalendarTitle';
import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getFilteredTodos, getMonthsParams, makeBlur } from '@/utils';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { Container, DaysContainer } from './Calendar.styled';
import { FC, useEffect, useState } from 'react';
import { addMonths } from 'date-fns';
import { ClickEvent } from '@/types/types';
import { IProps } from './Calendar.types';

const Calendar: FC<IProps> = ({ todos }) => {
  const [date, setDate] = useState(() => new Date());
  const { monthsWeeks, targetMonthNumber, targetMonthName, targetYear } =
    getMonthsParams(date);

  const filteredTodos = getFilteredTodos({
    todos,
    targetMonthNumber,
    targetYear,
  });

  useEffect(() => {
    console.log(filteredTodos);
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
      <CalendarTitle />
      <CalendarControls
        targetMonth={targetMonthName}
        targetYear={targetYear}
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
