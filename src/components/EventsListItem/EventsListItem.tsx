import { FC } from 'react';
import { IProps } from './EventsListItem.types';
import { Link } from 'react-router-dom';
import PagePaths from '@/constants/pagePaths';
import { ListItem } from './EventsListItem.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';

const EventsListItem: FC<IProps> = ({ event }) => {
  const { task, id, completed } = event;
  const deleteEvent = useDeleteEvent();

  return (
    <ListItem completed={completed}>
      <DelEventBtn
        onClick={() => {
          deleteEvent(id);
        }}
      />
      <Link to={`${PagePaths.eventsPath}/${id}`}>{task}</Link>
    </ListItem>
  );
};

export default EventsListItem;
