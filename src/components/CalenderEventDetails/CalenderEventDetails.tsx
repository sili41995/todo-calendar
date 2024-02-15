import { FC, useState } from 'react';
import { IProps } from './CalenderEventDetails.types';
import EditEventForm from '@/components/EditEventForm';
import EventDetails from '@/components/EventDetails';
import { ClickEvent } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import { AriaLabels, IconBtnTypes, IconSizes, Messages } from '@/constants';
import IconButton from '@/components/IconButton';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import {
  ButtonsList,
  Container,
  ListItem,
} from './CalenderEventDetails.styled';
import { useMutation } from '@tanstack/react-query';
import { deleteEvent } from '@/tanStackQuery/operations';
import queryClient from '@/tanStackQuery/client';
import QueryKey from '@/tanStackQuery/keys';

const CalenderEventDetails: FC<IProps> = ({ event, setModalWinState }) => {
  const [editEvent, setEditEvent] = useState<boolean>(false);
  const { mutate: removeEvent } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  function onSuccessHTTPRequest() {
    toasts.successToast(Messages.deleteEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKey.events] });
    setModalWinState();
  }

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  const toggleEditEventStatus = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setEditEvent((prevState) => !prevState);
  };

  const onDeleteBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    removeEvent(event.id);
  };

  return (
    <Container>
      <ButtonsList>
        {!editEvent && (
          <ListItem>
            <IconButton
              iconBtnType={IconBtnTypes.delete}
              onClick={onDeleteBtnClick}
              ariaLabel={AriaLabels.delete}
              icon={<AiOutlineDelete size={IconSizes.secondarySize} />}
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
        <EditEventForm event={event} />
      ) : (
        <EventDetails event={event} />
      )}
    </Container>
  );
};

export default CalenderEventDetails;
