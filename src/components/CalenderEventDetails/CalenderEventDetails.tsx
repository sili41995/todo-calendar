import { FC, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { ClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { AriaLabels, IconBtnTypes, IconSizes } from '@/constants';
import EventDetails from '@/components/EventDetails';
import EditEventForm from '@/components/EditEventForm';
import IconButton from '@/components/IconButton';
import { IProps } from './CalenderEventDetails.types';
import {
  ButtonsList,
  Container,
  ListItem,
} from './CalenderEventDetails.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';

const CalenderEventDetails: FC<IProps> = ({ event, setModalWinState }) => {
  const [editEvent, setEditEvent] = useState<boolean>(false);
  const deleteEvent = useDeleteEvent(setModalWinState);
  const toggleEditEventStatus = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setEditEvent((prevState) => !prevState);
  };

  const onDeleteBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    deleteEvent(event.id);
  };

  return (
    <Container>
      <ButtonsList>
        {!editEvent && (
          <ListItem>
            <DelEventBtn onClick={onDeleteBtnClick} />
          </ListItem>
        )}
        <ListItem>
          <IconButton
            iconBtnType={IconBtnTypes.edit}
            onClick={toggleEditEventStatus}
            ariaLabel={AriaLabels.edit}
            icon={<AiOutlineEdit size={IconSizes.secondarySize} />}
          />
        </ListItem>
      </ButtonsList>
      {editEvent ? (
        <EditEventForm event={event} />
      ) : (
        <EventDetails event={event} />
      )}
    </Container>
  );
};

export default CalenderEventDetails;
