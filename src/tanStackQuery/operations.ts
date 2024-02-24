import eventsServiceApi from '@/service/eventsServiceApi';
import {
  Events,
  IEvent,
  IGetEventByIdProps,
  IUpdateEvent,
  NewEvent,
} from '@/types/types';

const getEvents = async (): Promise<Events> =>
  await eventsServiceApi.fetchEvents();

const getEventById = async ({
  queryKey,
}: IGetEventByIdProps): Promise<IEvent> =>
  await eventsServiceApi.fetchEventById(queryKey[1]);

const addEvent = async (data: NewEvent): Promise<IEvent> =>
  await eventsServiceApi.addEvent(data);

const deleteEvent = async (id: string): Promise<IEvent> =>
  await eventsServiceApi.deleteEvent(id);

const updateEvent = async (data: IUpdateEvent): Promise<IEvent> =>
  await eventsServiceApi.updateEvent(data);

const operations = {
  getEvents,
  getEventById,
  addEvent,
  deleteEvent,
  updateEvent,
};

export default operations;
