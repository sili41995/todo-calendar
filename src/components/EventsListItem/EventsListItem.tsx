import { FC } from 'react';
import { IProps } from './EventsListItem.types';

const EventsListItem: FC<IProps> = ({ event }) => {
  const { task } = event;

  return <li>{task}</li>;
};

export default EventsListItem;
