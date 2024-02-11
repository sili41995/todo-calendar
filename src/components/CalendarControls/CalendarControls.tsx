import { FC } from 'react';
import { IProps } from './CalendarControls.types';
import { AriaLabels } from '@/constants';
import {
  ButtonsContainer,
  ButtonsList,
  ButtonsListItem,
  Container,
  Date,
  Month,
} from './CalendarControls.styled';
import CalendarButton from '@/components/CalendarButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const CalendarControls: FC<IProps> = ({
  targetMonth,
  targetYear,
  onIncrementBtnClick,
  onDecrementBtnClick,
  onTodayBtnClick,
}) => {
  const buttonsOptions = [
    {
      title: <FaAngleLeft />,
      ariaLabel: AriaLabels.prevMonth,
      onClick: onDecrementBtnClick,
      width: 36,
    },
    {
      title: 'Today',
      ariaLabel: AriaLabels.currentMonth,
      onClick: onTodayBtnClick,
      width: 120,
    },
    {
      title: <FaAngleRight />,
      ariaLabel: AriaLabels.nextMonth,
      onClick: onIncrementBtnClick,
      width: 36,
    },
  ];

  const onAddEventClick = (e: ClickEvent) => {
    console.log('add event');
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <Date>
        <Month>{targetMonth}</Month> {targetYear}
      </Date>
      <ButtonsContainer>
        <CalendarButton
          ariaLabel={AriaLabels.addEvent}
          onClick={onAddEventClick}
          title={'Add Event'}
          width={150}
        />
        <ButtonsList>
          {buttonsOptions.map(({ ariaLabel, onClick, title, width }) => (
            <ButtonsListItem key={ariaLabel}>
              <CalendarButton
                ariaLabel={ariaLabel}
                onClick={onClick}
                title={title}
                width={width}
              />
            </ButtonsListItem>
          ))}
        </ButtonsList>
      </ButtonsContainer>
    </Container>
  );
};

export default CalendarControls;
