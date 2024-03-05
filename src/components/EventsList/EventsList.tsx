import { FC } from 'react';
import { IProps } from './EventsList.types';
import EventsListItem from '../EventsListItem';
import { List } from './EventsList.styled';

const EventsList: FC<IProps> = ({ events }) => (
  <List>
    {events.map((event) => (
      <EventsListItem key={event._id} event={event} />
    ))}
  </List>
);

export default EventsList;
