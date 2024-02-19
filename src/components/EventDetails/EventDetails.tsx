import { FC } from 'react';
import { format, isPast } from 'date-fns';
import { GeneralParams } from '@/constants';
import { IProps } from './EventDetails.types';
import { Deadline, Status, Text } from './EventDetails.styled';

const EventDetails: FC<IProps> = ({ event }) => {
  const { deadline, completed, task } = event;
  const date = new Date(deadline);
  const taskDeadline = format(date, GeneralParams.fullDateFormat);
  const isPastDate = isPast(date);

  return (
    <>
      <Text>Event: {task}</Text>
      <Text>
        Deadline: <Deadline isPast={isPastDate}>{taskDeadline}</Deadline>
      </Text>
      <Text>
        Status:{' '}
        <Status completed={completed}>
          {completed ? 'Completed' : 'Unfinished'}
        </Status>
      </Text>
    </>
  );
};

export default EventDetails;
