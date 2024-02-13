import { FC } from 'react';
import { IProps } from './CalenderEventDetails.types';
import { Deadline, Status, Text } from './CalenderEventDetails.styled';
import { format, isPast } from 'date-fns';
import { GeneralParams } from '@/constants';

const CalenderEventDetails: FC<IProps> = ({ event }) => {
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

export default CalenderEventDetails;
