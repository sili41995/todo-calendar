import eventsServiceApi from '@/service/eventsServiceApi';

export const getEvents = async () => {
  try {
    const result = await eventsServiceApi.fetchEvents();
    return result;
  } catch (error) {
    console.log(error);
  }
};
