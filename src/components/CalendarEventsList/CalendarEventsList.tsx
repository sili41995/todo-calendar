import { FC } from 'react';
import { IProps } from './CalendarEventsList.types';
import { EventBtn, Title } from './CalendarEventsList.styled';
import { GeneralParams } from '@/constants';

const CalendarEventsList: FC<IProps> = ({ todos }) => {
  const isMoreMaxQuantity = todos.length > GeneralParams.maxEventsCount;
  const events = isMoreMaxQuantity
    ? todos.filter((_, index) => index < GeneralParams.maxEventsCount - 1)
    : todos;

  return (
    <ul>
      {events.map(({ task, id }) => (
        <li key={id}>
          <EventBtn>
            <Title>{task}</Title>
          </EventBtn>
        </li>
      ))}
      {isMoreMaxQuantity && (
        <EventBtn>
          <Title>Show more</Title>
        </EventBtn>
      )}
    </ul>
  );
};

export default CalendarEventsList;
