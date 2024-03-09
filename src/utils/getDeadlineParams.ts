import { GeneralParams } from '@/constants';
import { IDeadlineParams } from '@/types/types';
import { format, isPast } from 'date-fns';

const getDeadlineParams = (deadline: string): IDeadlineParams => {
  const taskDeadline = format(deadline, GeneralParams.fullDateFormat);
  const isPastDate = isPast(deadline);

  return { taskDeadline, isPastDate };
};

export default getDeadlineParams;
