import { FC, useState } from 'react';
import CalendarButton from '@/components/CalendarButton';
import CalendarButtonsList from '@/components/CalendarButtonsList';
import ModalWin from '@/components/ModalWin';
import AddEventForm from '@/components/AddEventForm';
import { makeBlur } from '@/utils';
import { AriaLabels } from '@/constants';
import { ClickEvent } from '@/types/types';
import { IProps } from './CalendarControls.types';
import {
  ButtonsContainer,
  Container,
  Date,
  Month,
} from './CalendarControls.styled';

const CalendarControls: FC<IProps> = ({
  targetMonth,
  targetYear,
  ...otherProps
}) => {
  const [showAddEventForm, setShowAddEventForm] = useState<boolean>(false);

  const onAddEventBtnClick = (e: ClickEvent) => {
    setShowAddEventForm(true);
    makeBlur(e.currentTarget);
  };

  const setModalWinState = () => {
    setShowAddEventForm((prevState) => !prevState);
  };

  return (
    <Container>
      <Date>
        <Month>{targetMonth}</Month> {targetYear}
      </Date>
      <ButtonsContainer>
        <CalendarButton
          ariaLabel={AriaLabels.addEvent}
          onClick={onAddEventBtnClick}
          title={'Add Event'}
          width={150}
        />
        <CalendarButtonsList {...otherProps} />
      </ButtonsContainer>
      {showAddEventForm && (
        <ModalWin
          setModalWinState={setModalWinState}
          children={<AddEventForm />}
        />
      )}
    </Container>
  );
};

export default CalendarControls;
