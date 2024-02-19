import { FC, useState } from 'react';
import ModalWin from '@/components/ModalWin';
import CalenderEventDetails from '@/components/CalenderEventDetails';
import { IProps } from './CalendarEvent.types';
import { EventBtn, ListItem, Title } from './CalendarEvent.styled';

const CalendarEvent: FC<IProps> = ({ event }) => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const { completed, task } = event;

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    <>
      <ListItem>
        <EventBtn onClick={setModalWinState}>
          <Title completed={completed}>{task}</Title>
        </EventBtn>
      </ListItem>
      {showModalWin && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={
            <CalenderEventDetails
              event={event}
              setModalWinState={setModalWinState}
            />
          }
        />
      )}
    </>
  );
};

export default CalendarEvent;
