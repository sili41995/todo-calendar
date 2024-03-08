import { GeneralParams } from '@/constants';
import { IDeadlineParams } from '@/types/types';
import { format, isPast } from 'date-fns';

const getDeadlineParams = (deadline: string): IDeadlineParams => {
  const date = new Date(deadline);
  const timezone = date.getTimezoneOffset() / 60;
  const hours = date.getHours();
  date.setHours(hours + timezone);
  const taskDeadline = format(date, GeneralParams.fullDateFormat);
  const isPastDate = isPast(date);

  return { taskDeadline, isPastDate };
};

export default getDeadlineParams;
