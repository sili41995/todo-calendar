import eventsServiceApi from '@/service/eventsServiceApi';
import { Events, IEvent, IUpdateEvent, NewEvent } from '@/types/types';

const getEvents = async (): Promise<Events | undefined> =>
  await eventsServiceApi.fetchEvents();

const addEvent = async (data: NewEvent): Promise<IEvent> =>
  await eventsServiceApi.addEvent(data);

const deleteEvent = async (id: string): Promise<IEvent> =>
  await eventsServiceApi.deleteEvent(id);

const updateEvent = async (data: IUpdateEvent): Promise<IEvent> =>
  await eventsServiceApi.updateEvent(data);

const operations = { getEvents, addEvent, deleteEvent, updateEvent };

export default operations;
