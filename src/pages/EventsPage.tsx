import DefaultMessage from '@/components/DefaultMessage';
import EventsList from '@/components/EventsList';
import Loader from '@/components/Loader';
import { Messages } from '@/constants';
import { QueryKeys, operations } from '@/tanStackQuery';
import { getSortedEvents, toasts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const EventsPage: FC = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: [QueryKeys.events],
    queryFn: operations.getEvents,
    refetchOnMount: true,
  });
  const sortedEvents = getSortedEvents(data?.events);
  const showEventsList = sortedEvents && Boolean(sortedEvents.length);

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [data, error, isError]);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <>
          {showEventsList ? (
            <EventsList events={sortedEvents} />
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
