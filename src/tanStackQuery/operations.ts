import eventsServiceApi from '@/service/eventsServiceApi';
import { Events, IEvent, NewEvent } from '@/types/types';

export const getEvents = async (): Promise<Events | undefined> => {
  try {
    const result = await eventsServiceApi.fetchEvents();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addEvent = async (data: NewEvent): Promise<IEvent> =>
  await eventsServiceApi.addEvent(data);

export const deleteEvent = async (id: string): Promise<IEvent> =>
  await eventsServiceApi.deleteEvent(id);
