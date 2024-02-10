import { FC, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import { IProps } from './CalendarEvent.types';
import { EventBtn, ListItem, Title } from './CalendarEvent.styled';

const CalendarEvent: FC<IProps> = ({ event }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    <>
      <ListItem>
        <EventBtn onClick={setModalWinState}>
          <Title>{event.task}</Title>
        </EventBtn>
      </ListItem>
      {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={<p>{event.task}</p>}
        />
      )}
    </>
  );
};

export default CalendarEvent;
