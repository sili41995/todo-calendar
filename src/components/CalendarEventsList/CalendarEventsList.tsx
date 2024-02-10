import { FC } from 'react';
import { IProps } from './CalendarEventsList.types';
import { List, ListItem, ShowMoreBtn } from './CalendarEventsList.styled';
import { getEvents } from '@/utils';
import { GeneralParams } from '@/constants';
import CalendarEvent from '@/components/CalendarEvent';

const CalendarEventsList: FC<IProps> = ({ todos }) => {
  const isMoreMaxQuantity = todos.length > GeneralParams.maxEventsCount;
  const events = isMoreMaxQuantity ? getEvents(todos) : todos;

  return (
    <List>
      {events.map((event) => (
        <CalendarEvent key={event.id} event={event} />
      ))}
      {isMoreMaxQuantity && (
        <ListItem>
          <ShowMoreBtn>Show more</ShowMoreBtn>
        </ListItem>
      )}
    </List>
  );
};

export default CalendarEventsList;
