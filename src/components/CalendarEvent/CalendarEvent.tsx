import { FC, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './CalendarEvent.types';
import { EventBtn, ListItem, Title } from './CalendarEvent.styled';
import CalenderEventDetails from '@/components/CalenderEventDetails';

const CalendarEvent: FC<IProps> = ({ event }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    <>
      <ListItem>
        <EventBtn onClick={setModalWinState}>
          <Title completed={event.completed}>{event.task}</Title>
        </EventBtn>
      </ListItem>
      {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={<CalenderEventDetails event={event} />}
        />
      )}
    </>
  );
};

export default CalendarEvent;
