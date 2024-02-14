import { FC, useState } from 'react';
import { IProps } from './CalenderEventDetails.types';
import EditEventForm from '@/components/EditEventForm';
import EventDetails from '@/components/EventDetails';
import { ClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { AriaLabels, IconBtnTypes, IconSizes } from '@/constants';
import IconButton from '@/components/IconButton';
import { AiOutlineEdit } from 'react-icons/ai';
import { Container } from './CalenderEventDetails.styled';

const CalenderEventDetails: FC<IProps> = ({ event }) => {
  const [editEvent, setEditEvent] = useState<boolean>(false);

  const toggleEditEventStatus = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setEditEvent((prevState) => !prevState);
  };

  return (
    <Container>
      <IconButton
        iconBtnType={IconBtnTypes.edit}
        onClick={toggleEditEventStatus}
        ariaLabel={AriaLabels.edit}
        icon={<AiOutlineEdit size={IconSizes.secondarySize} />}
      />
      {editEvent ? <EditEventForm /> : <EventDetails event={event} />}
    </Container>
  );
};

export default CalenderEventDetails;
