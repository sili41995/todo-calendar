import { SortTypes } from '@/constants';
import { Events, ISortEventsByDeadlineProps } from '@/types/types';

const sortEventsByDeadline = ({
  events,
  sortType,
}: ISortEventsByDeadlineProps): Events | undefined => {
  if (!events) return events;

  return [...events].sort(({ deadline: prevEvent }, { deadline: nextEvent }) =>
    sortType === SortTypes.decs
      ? nextEvent.localeCompare(prevEvent)
      : prevEvent.localeCompare(nextEvent)
  );
};

export default sortEventsByDeadline;
