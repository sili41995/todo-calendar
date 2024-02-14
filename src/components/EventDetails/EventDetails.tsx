import { GeneralParams } from '@/constants';
import { format, isPast } from 'date-fns';
import { FC } from 'react';
import { IProps } from './EventDetails.types';
import { Deadline, Status, Text } from './EventDetails.styled';

const EventDetails: FC<IProps> = ({ event }) => {
  const date = new Date(event.deadline);
  const deadline = format(date, GeneralParams.fullDateFormat);
  const isPastDate = isPast(date);

  return (
    <>
      <Text>Event: {event.task}</Text>
      <Text>
        Deadline: <Deadline isPast={isPastDate}>{deadline}</Deadline>
      </Text>
      <Text>
        Status:{' '}
        <Status completed={event.completed}>
          {event.completed ? 'Completed' : 'Unfinished'}
        </Status>
      </Text>
    </>
  );
};

export default EventDetails;
