import { FC } from 'react';
import { IProps } from './CalendarEventsList.types';
import { Title } from './CalendarEventsList.styled';

const CalendarEventsList: FC<IProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ task, id }) => (
        <li key={id}>
          <Title>{task}</Title>
        </li>
      ))}
    </ul>
  );
};

export default CalendarEventsList;
