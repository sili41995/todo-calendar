import DefaultMessage from '@/components/DefaultMessage';
import EventsList from '@/components/EventsList';
import PaginationBar from '@/components/PaginationBar';
import { GeneralParams, Messages, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchEvents } from '@/redux/events/operations';
import { selectCount, selectEvents } from '@/redux/events/selectors';
import { sortEventsByDeadline } from '@/utils';
import { FC, useEffect } from 'react';

const EventsPage: FC = () => {
  const { searchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';
  const sortType = searchParams.get(SearchParamsKeys.sort) ?? '';
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);
  const sortedEvents = sortEventsByDeadline({ events, sortType });
  const showEventsList = sortedEvents && Boolean(sortedEvents.length);
  const count = useAppSelector(selectCount);
  const showPaginationBar =
    events && count && count > GeneralParams.maxEventsListCount;

  useEffect(() => {
    dispatch(fetchEvents(page));
  }, [dispatch, page]);

  return (
    <>
      {showEventsList ? (
        <>
          <EventsList events={sortedEvents} />
          {showPaginationBar && (
            <PaginationBar
              quantity={Number(GeneralParams.maxEventsListCount)}
              itemsQuantity={count}
              step={2}
            />
          )}
        </>
      ) : (
        <DefaultMessage message={Messages.emptyEventsList} />
      )}
    </>
  );
};

export default EventsPage;
