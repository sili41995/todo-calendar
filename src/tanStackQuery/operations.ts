import eventsServiceApi from '@/service/eventsServiceApi';
import {
  ICredentials,
  IToken,
  // Events,
  // IEvent,
  // IGetEventByIdProps,
  // IUpdateEvent,
  // NewEvent,
  NewUser,
  User,
} from '@/types/types';
import { QueryKeys, queryClient } from '.';

const signUp = async (data: FormData): Promise<NewUser> =>
  await eventsServiceApi.signUp(data);

const signIn = async (data: ICredentials): Promise<IToken> =>
  await eventsServiceApi.signIn(data);

const refreshUser = async (token: string | undefined): Promise<User | null> => {
  if (!token) {
    return null;
  }

  eventsServiceApi.token = token;

  try {
    const { name, email, avatar } = await eventsServiceApi.refreshUser();
    queryClient.setQueryData([QueryKeys.isLoggedIn], true);
    return { name, email, avatar };
  } catch (error) {
    queryClient.setQueryData([QueryKeys.isLoggedIn], false);
    return null;
  }
};

// const getEvents = async (): Promise<Events> =>
//   await eventsServiceApi.fetchEvents();

// const getEventById = async ({
//   queryKey,
// }: IGetEventByIdProps): Promise<IEvent> =>
//   await eventsServiceApi.fetchEventById(queryKey[1]);

// const addEvent = async (data: NewEvent): Promise<IEvent> =>
//   await eventsServiceApi.addEvent(data);

// const deleteEvent = async (id: string): Promise<IEvent> =>
//   await eventsServiceApi.deleteEvent(id);

// const updateEvent = async (data: IUpdateEvent): Promise<IEvent> =>
//   await eventsServiceApi.updateEvent(data);

const operations = {
  signUp,
  signIn,
  refreshUser,
  // getEvents,
  // getEventById,
  // addEvent,
  // deleteEvent,
  // updateEvent,
};

export default operations;
