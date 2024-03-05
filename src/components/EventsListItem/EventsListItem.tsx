import { FC } from 'react';
import { IProps } from './EventsListItem.types';
import { Link } from 'react-router-dom';
import { PagePaths, IconBtnTypes } from '@/constants';
import { ListItem, Task } from './EventsListItem.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';

const EventsListItem: FC<IProps> = ({ event }) => {
  const { task, _id, completed } = event;
  const deleteEvent = useDeleteEvent();

  return (
    <ListItem>
      <DelEventBtn
        iconBtnType={IconBtnTypes.deleteTransparent}
        onClick={() => {
          deleteEvent(_id);
        }}
      />
      <Link to={`${PagePaths.eventsPath}/${_id}`}>
        <Task completed={completed}>{task}</Task>
      </Link>
    </ListItem>
  );
};

export default EventsListItem;
