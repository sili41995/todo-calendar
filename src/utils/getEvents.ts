import { GeneralParams } from '@/constants';
import { Todos } from '@/types/types';

const getEvents = (todos: Todos): Todos =>
  todos.filter((_, index) => index < GeneralParams.maxEventsCount - 1);

export default getEvents;
