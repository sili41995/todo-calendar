import { GeneralParams } from '@/constants';
import { Events } from '@/types/types';
import { format } from 'date-fns';

export interface IGetFilteredEventsParams {
  events: Events;
  targetYear: string;
  targetMonthNumber: string;
}

const getFilteredEvents = ({
  events,
  targetYear,
  targetMonthNumber,
}: IGetFilteredEventsParams) =>
  events.filter(({ deadline }) => {
    const deadlineMonth = format(deadline, GeneralParams.monthNumericFormat);
    const deadlineYear = format(deadline, GeneralParams.yearNumericFormat);
    const expectedYear = deadlineYear === targetYear;
    const expectedMonth =
      Number(targetMonthNumber) - 1 <= Number(deadlineMonth) &&
      Number(deadlineMonth) <= Number(targetMonthNumber) + 1;

    return expectedYear && expectedMonth;
  });

export default getFilteredEvents;
