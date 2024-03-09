import eventsServiceApi from '@/service/eventsServiceApi';
import {
  ICredentials,
  IEvent,
  IEventsInfo,
  IFetchEventByIdProps,
  IFetchEventsByMonthProps,
  IToken,
  IUpdateEventProps,
  INewEvent,
  NewUser,
  User,
} from '@/types/types';
import { QueryKeys, queryClient } from '.';

const signUp = async (data: FormData): Promise<NewUser> =>
  await eventsServiceApi.signUp(data);

const signIn = async (data: ICredentials): Promise<IToken> =>
  await eventsServiceApi.signIn(data);

const refreshUser = async (token: string | undefined): Promise<User | null> => {
  queryClient.setQueryData([QueryKeys.isLoggedIn], false);
  if (!token) return null;

  eventsServiceApi.token = token;

  try {
    const { name, email, avatar } = await eventsServiceApi.refreshUser();
    queryClient.setQueryData([QueryKeys.isLoggedIn], true);
    return { name, email, avatar };
  } catch (error) {
    return null;
  }
};

const getEvents = async (): Promise<IEventsInfo> =>
  await eventsServiceApi.fetchEvents();

const getEventById = async (
  data: IFetchEventByIdProps
): Promise<IEvent | null> => {
  if (!data.id) return null;

  const result = await eventsServiceApi.fetchEventById(data);
  return result;
};

const getEventsByMonth = async (data: IFetchEventsByMonthProps) =>
  await eventsServiceApi.fetchEventsByMonth(data);

const addEvent = async (data: INewEvent): Promise<IEvent> =>
  await eventsServiceApi.addEvent(data);

const deleteEvent = async (id: string): Promise<IEvent> =>
  await eventsServiceApi.deleteEvent(id);

const updateEvent = async (data: IUpdateEventProps): Promise<IEvent> =>
  await eventsServiceApi.updateEvent(data);

const operations = {
  signUp,
  signIn,
  refreshUser,
  getEvents,
  getEventById,
  getEventsByMonth,
  addEvent,
  deleteEvent,
  updateEvent,
};

export default operations;
