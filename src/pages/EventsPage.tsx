import DefaultMessage from '@/components/DefaultMessage';
import EventsList from '@/components/EventsList';
import Loader from '@/components/Loader';
import PaginationBar from '@/components/PaginationBar';
import { GeneralParams, Messages, SearchParamsKeys } from '@/constants';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { QueryKeys, operations } from '@/tanStackQuery';
import { getSortedEvents, toasts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const EventsPage: FC = () => {
  const { searchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page);
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: [QueryKeys.events, page],
    queryFn: () => operations.getEvents(page),
    refetchOnMount: true,
  });
  const sortedEvents = getSortedEvents(data?.events);
  const showEventsList = sortedEvents && Boolean(sortedEvents.length);
  const showPaginationBar =
    data && data.count > GeneralParams.maxEventsListCount;

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [data, error, isError]);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <>
          {showEventsList ? (
            <div>
              <EventsList events={sortedEvents} />
              {showPaginationBar && (
                <PaginationBar
                  quantity={Number(GeneralParams.maxEventsListCount)}
                  itemsQuantity={data.count}
                  step={2}
                />
              )}
            </div>
          ) : (
            <DefaultMessage message={Messages.emptyEventsList} />
          )}
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default EventsPage;
