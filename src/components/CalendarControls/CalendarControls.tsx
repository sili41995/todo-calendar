import { FC } from 'react';
import { IProps } from './CalendarControls.types';
import { addDays, format } from 'date-fns';
import { GeneralParams } from '@/constants';

const CalendarControls: FC<IProps> = ({ currentDate }) => {
  const currentMonth = format(currentDate, GeneralParams.currentMonthFormat);
  const currentYear = format(currentDate, GeneralParams.currentYearFormat);
  // console.log(addDays(addDays(currentDate, 1), 1));
  // console.log(addDays(currentDate, -700));
  return (
    <div>
      <p>
        <strong>{currentMonth}</strong> {currentYear}
      </p>
      <ul>
        <li>
          <button type='button'>-</button>
        </li>
        <li>
          <button type='button'>Today</button>
        </li>
        <li>
          <button type='button'>+</button>
        </li>
      </ul>
    </div>
  );
};

export default CalendarControls;
