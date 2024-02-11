import { GeneralParams } from '@/constants';
import { Events } from '@/types/types';

const getEvents = (events: Events): Events =>
  events.filter((_, index) => index < GeneralParams.maxEventsCount - 1);

export default getEvents;
