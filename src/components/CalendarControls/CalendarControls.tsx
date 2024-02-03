import { FC } from 'react';
import { IProps } from './CalendarControls.types';
import { format } from 'date-fns';
import { AriaLabels, GeneralParams } from '@/constants';
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
  date,
  onIncrementBtnClick,
  onDecrementBtnClick,
  onTodayBtnClick,
}) => {
  const currentMonth = format(date, GeneralParams.currentMonthFormat);
  const currentYear = format(date, GeneralParams.currentYearFormat);
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
        <Month>{currentMonth}</Month> {currentYear}
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
