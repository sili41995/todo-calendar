import Calendar from '@/components/Calendar';
import Loader from '@/components/Loader';
import { QueryKeys, operations } from '@/tanStackQuery';
import { toasts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';

const EventPlanningPage: FC = () => {
  const {
    data: events = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QueryKeys.events],
    queryFn: operations.getEvents,
  });

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [error, isError]);

  return isLoading ? <Loader /> : <Calendar events={events} />;
};

export default EventPlanningPage;
