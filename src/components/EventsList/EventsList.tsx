import { FC } from 'react';
import { IProps } from './EventsList.types';
import EventsListItem from '../EventsListItem';

const EventsList: FC<IProps> = ({ events }) =>
  events.map((event) => <EventsListItem key={event.id} event={event} />);

export default EventsList;
