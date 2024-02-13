import { FC } from 'react';
import { IProps } from './EventDetails.types';
import { Deadline, Status, Text } from './EventDetails.styled';

const EventDetails: FC<IProps> = ({ event }) => {
  const deadline = new Date(event.deadline).toLocaleString();
  return (
    <>
      <Text>Event: {event.task}</Text>
      <Text>
        Deadline: <Deadline>{deadline}</Deadline>
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
