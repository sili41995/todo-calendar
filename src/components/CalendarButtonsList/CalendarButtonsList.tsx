import { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CalendarButton from '@/components/CalendarButton';
import { AriaLabels } from '@/constants';
import { IProps } from './CalendarButtonsList.types';
import { ButtonsListItem, List } from './CalendarButtonsList.styled';

const CalendarButtonsList: FC<IProps> = ({
  onDecrementBtnClick,
  onTodayBtnClick,
  onIncrementBtnClick,
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
    <List>
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
    </List>
  );
};

export default CalendarButtonsList;
