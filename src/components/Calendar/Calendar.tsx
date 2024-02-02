import CalendarTitle from '@/components/CalendarTitle';

import CalendarDaysList from '@/components/CalendarDaysList';
import CalendarControls from '@/components/CalendarControls';
import { getMonthParams } from '@/utils';
import CalendarNamesOfDays from '@/components/CalendarNamesOfDays';

const Calendar = () => {
  const { namesOfDays } = getMonthParams();

  return (
    <div>
      <CalendarTitle />
      <CalendarControls />
      <CalendarNamesOfDays namesOfDays={namesOfDays} />
      <CalendarDaysList />
    </div>
  );
};

export default Calendar;
