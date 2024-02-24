import { FC } from 'react';
import { IProps } from './EventsListItem.types';
import { Link } from 'react-router-dom';
import PagePaths from '@/constants/pagePaths';
import { ListItem, Task } from './EventsListItem.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';
import { IconBtnTypes } from '@/constants';

const EventsListItem: FC<IProps> = ({ event }) => {
  const { task, id, completed } = event;
  const deleteEvent = useDeleteEvent();

  return (
    <ListItem>
      <DelEventBtn
        iconBtnType={IconBtnTypes.deleteTransparent}
        onClick={() => {
          deleteEvent(id);
        }}
      />
      <Link to={`${PagePaths.eventsPath}/${id}`}>
        <Task completed={completed}>{task}</Task>
      </Link>
    </ListItem>
  );
};

export default EventsListItem;
