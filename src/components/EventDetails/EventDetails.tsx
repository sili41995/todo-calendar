import { FC } from 'react';
import { IProps } from './EventDetails.types';
import { Deadline, Status, Text } from './EventDetails.styled';
import { getDeadlineParams } from '@/utils';

const EventDetails: FC<IProps> = ({ event }) => {
  const { deadline, completed, task } = event;
  const { taskDeadline, isPastDate } = getDeadlineParams(deadline);

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
