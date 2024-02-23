import { FC } from 'react';
import { IProps } from './EventsListItem.types';
import { Link } from 'react-router-dom';
import PagePaths from '@/constants/pagePaths';

const EventsListItem: FC<IProps> = ({ event }) => {
  const { task, id } = event;

  return (
    <li>
      <Link to={`${PagePaths.eventsPath}/${id}`}>{task}</Link>
    </li>
  );
};

export default EventsListItem;
