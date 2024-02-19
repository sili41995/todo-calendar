import { GeneralParams } from '@/constants';
import { IDayParams, IGetDayParamsProps } from '@/types/types';
import { format, getDayOfYear, getMonth, isToday, isWeekend } from 'date-fns';

const getDayParams = ({
  day,
  events,
  monthOfCurrentPage,
}: IGetDayParamsProps): IDayParams => {
  const filteredEvents = events.filter(
    ({ deadline }) => getDayOfYear(deadline) === getDayOfYear(day)
  );
  const showEventsList = Boolean(filteredEvents.length);
  const isCurrentDay = isToday(day);
  const isWeekendDay = isWeekend(day);
  const isCurrentMonth = monthOfCurrentPage === getMonth(day);
  const dayNumber = format(day, GeneralParams.dayOfMonthNumericFormat);

  return {
    isWeekendDay,
    isCurrentDay,
    isCurrentMonth,
    dayNumber,
    showEventsList,
    filteredEvents,
  };
};

export default getDayParams;
