import { FC } from 'react';
import { IProps } from './CalendarControls.types';
import { AriaLabels } from '@/constants';
import {
  ButtonsList,
  ButtonsListItem,
  Container,
  Date,
  Month,
} from './CalendarControls.styled';
import CalendarButton from '@/components/CalendarButton';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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

  return (
    <Container>
      <Date>
        <Month>{targetMonth}</Month> {targetYear}
      </Date>
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
    </Container>
  );
};

export default CalendarControls;
