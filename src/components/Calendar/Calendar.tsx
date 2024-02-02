import { getMonthParams } from '@/utils';
import { useEffect } from 'react';

const Calendar = () => {
  const {
    lastDayOfLastWeek,
    firstDayOfFirstWeek,
    firstDayOfMonth,
    lastDayOfMonth,
  } = getMonthParams();

  useEffect(() => {
    console.log(lastDayOfLastWeek);
  });

  return (
    <div>
      <p>
        firstDayOfMonth <strong>{firstDayOfMonth}</strong>
      </p>
      <p>
        lastDayOfMonth <strong>{lastDayOfMonth}</strong>
      </p>
      <p>
        firstDayOfFirstWeek <strong>{firstDayOfFirstWeek}</strong>
      </p>
      <p>
        lastDayOfLastWeek <strong>{lastDayOfLastWeek}</strong>
      </p>
    </div>
  );
};

export default Calendar;
