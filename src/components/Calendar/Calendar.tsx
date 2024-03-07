import { FC } from 'react';
import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { IProps } from './Calendar.types';
import { Container, ControlsContainer, DaysContainer } from './Calendar.styled';

const Calendar: FC<IProps> = ({
  events,
  onDecrementBtnClick,
  onIncrementBtnClick,
  onTodayBtnClick,
  monthsParams,
}) => {
  const { targetMonthName, targetYear, monthsWeeks } = monthsParams;

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
        <CalendarDaysList monthsWeeks={monthsWeeks} events={events} />
      </DaysContainer>
    </Container>
  );
};

export default Calendar;
