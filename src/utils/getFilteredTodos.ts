import { GeneralParams } from '@/constants';
import { Todos } from '@/types/types';
import { format } from 'date-fns';

export interface IGetFilteredTodosParams {
  todos: Todos;
  targetYear: string;
  targetMonthNumber: string;
}

const getFilteredTodos = ({
  todos,
  targetYear,
  targetMonthNumber,
}: IGetFilteredTodosParams) =>
  todos.filter(({ deadline }) => {
    const deadlineMonth = format(deadline, GeneralParams.monthNumericFormat);
    const deadlineYear = format(deadline, GeneralParams.yearNumericFormat);

    return deadlineYear === targetYear && deadlineMonth === targetMonthNumber;
  });

export default getFilteredTodos;
