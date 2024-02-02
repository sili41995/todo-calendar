import React, { FC } from 'react';
import { IProps } from './CalendarNamesOfDays.types';
import { Day, ListOfDays } from './CalendarNamesOfDays.styled';

const CalendarNamesOfDays: FC<IProps> = ({ namesOfDays }) => {
  return (
    <ListOfDays>
      {namesOfDays.map((nameOfDay) => (
        <Day key={nameOfDay}>{nameOfDay}</Day>
      ))}
    </ListOfDays>
  );
};

export default CalendarNamesOfDays;
