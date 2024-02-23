import EventsList from '@/components/EventsList';
import Loader from '@/components/Loader';
import { QueryKeys, operations } from '@/tanStackQuery';
import { getSortedEvents, toasts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const EventsPage: FC = () => {
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QueryKeys.events],
    queryFn: operations.getEvents,
  });
  const sortedEvents = getSortedEvents(events);

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [error, isError]);

  return (
    <>
      {isLoading && <Loader />}
      {sortedEvents && <EventsList events={sortedEvents} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default EventsPage;
