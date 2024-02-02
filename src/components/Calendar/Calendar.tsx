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
      <p>firstDayOfMonth {String(firstDayOfMonth)}</p>
      <p>lastDayOfMonth {String(lastDayOfMonth)}</p>
      <p>firstDayOfFirstWeek {String(firstDayOfFirstWeek)}</p>
      <p>lastDayOfLastWeek {String(lastDayOfLastWeek)}</p>
    </div>
  );
};

export default Calendar;
