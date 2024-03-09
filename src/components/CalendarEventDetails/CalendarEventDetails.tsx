import { FC, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { AriaLabels, FormTypes, IconBtnTypes, IconSizes } from '@/constants';
import EventDetails from '@/components/EventDetails';
import EditEventForm from '@/components/EditEventForm';
import IconButton from '@/components/IconButton';
import { IProps } from './CalendarEventDetails.types';
import {
  ButtonsList,
  Container,
  ListItem,
} from './CalendarEventDetails.styled';
import DelEventBtn from '@/components/DelEventBtn';
import { useDeleteEvent } from '@/hooks';

const CalendarEventDetails: FC<IProps> = ({ event, setModalWinState }) => {
  const [editEvent, setEditEvent] = useState<boolean>(false);
  const deleteEvent = useDeleteEvent(setModalWinState);
  const toggleEditEventStatus = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setEditEvent((prevState) => !prevState);
  };

  const onDeleteBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    deleteEvent(event._id);
  };

  return (
    <Container>
      <ButtonsList>
        {!editEvent && (
          <ListItem>
            <DelEventBtn
              onClick={onDeleteBtnClick}
              iconBtnType={IconBtnTypes.delete}
            />
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
        <EditEventForm event={event} formType={FormTypes.editEvent} />
      ) : (
        <EventDetails event={event} />
      )}
    </Container>
  );
};

export default CalendarEventDetails;
