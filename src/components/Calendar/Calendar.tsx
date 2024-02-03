import CalendarTitle from '@/components/CalendarTitle';
import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getMonthsParams } from '@/utils';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { Container, DaysContainer } from './Calendar.styled';

const Calendar = () => {
  const { currentDate, monthsWeeks } = getMonthsParams();

  return (
    <Container>
      <CalendarTitle />
      <CalendarControls currentDate={currentDate} />
      <DaysContainer>
        <CalendarDaysNames monthsWeeks={monthsWeeks} />
        <CalendarDaysList monthsWeeks={monthsWeeks} />
      </DaysContainer>
    </Container>
  );
};

export default Calendar;
