import { Events } from '@/types/types';

const getSortedEvents = (events: Events | undefined): Events | undefined => {
  if (!events) return events;

  return [...events].sort((prevEvent, nextEvent) =>
    nextEvent.deadline.localeCompare(prevEvent.deadline)
  );
};

export default getSortedEvents;
