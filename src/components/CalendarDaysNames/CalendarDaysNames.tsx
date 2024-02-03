import { FC } from 'react';
import { IProps } from './CalendarDaysNames.types';
import { Day, Name, DaysList } from './CalendarDaysNames.styled';

const CalendarDaysNames: FC<IProps> = ({ daysNames }) => {
  return (
    <DaysList>
      {daysNames.map((name) => (
        <Day key={name}>
          <Name>{name}</Name>
        </Day>
      ))}
    </DaysList>
  );
};

export default CalendarDaysNames;
