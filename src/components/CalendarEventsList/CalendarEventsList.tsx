import { FC } from 'react';
import { IProps } from './CalendarEventsList.types';
import { List, ListItem, EventBtn, Title } from './CalendarEventsList.styled';
import { getEvents } from '@/utils';
import { GeneralParams } from '@/constants';

const CalendarEventsList: FC<IProps> = ({ todos }) => {
  const isMoreMaxQuantity = todos.length > GeneralParams.maxEventsCount;
  const events = isMoreMaxQuantity ? getEvents(todos) : todos;

  return (
    <List>
      {events.map(({ task, id }) => (
        <ListItem key={id}>
          <EventBtn>
            <Title>{task}</Title>
          </EventBtn>
        </ListItem>
      ))}
      {isMoreMaxQuantity && (
        <ListItem>
          <EventBtn>
            <Title>Show more</Title>
          </EventBtn>
        </ListItem>
      )}
    </List>
  );
};

export default CalendarEventsList;
