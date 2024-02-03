import CalendarTitle from '@/components/CalendarTitle';
import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getMonthsParams } from '@/utils';
import CalendarDaysNames from '@/components/CalendarDaysNames';
import { DaysContainer } from './Calendar.styled';

const Calendar = () => {
  const { daysNames, monthsWeeks } = getMonthsParams();

  return (
    <>
      <CalendarTitle />
      <CalendarControls />
      <DaysContainer>
        <CalendarDaysNames monthsWeeks={monthsWeeks} />
        <CalendarDaysList monthsWeeks={monthsWeeks} />
      </DaysContainer>
    </>
  );
};

export default Calendar;
