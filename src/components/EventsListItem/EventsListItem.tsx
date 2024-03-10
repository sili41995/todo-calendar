import { FC } from 'react';
import { IProps } from './EventsListItem.types';
import { IconBtnTypes } from '@/constants';
import { ListItem, Task } from './EventsListItem.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';
import LinkWithQuery from '@/components/LinkWithQuery';

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
      <LinkWithQuery to={_id}>
        <Task completed={completed}>{task}</Task>
      </LinkWithQuery>
    </ListItem>
  );
};

export default EventsListItem;
