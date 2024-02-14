import eventsServiceApi from '@/service/eventsServiceApi';
import { NewEvent } from '@/types/types';

export const getEvents = async () => {
  try {
    const result = await eventsServiceApi.fetchEvents();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addEvent = async (data: NewEvent) => {
  try {
    const result = await eventsServiceApi.addEvent(data);
    return result;
  } catch (error) {
    console.log(error);
  }
};
