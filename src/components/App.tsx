import Calendar from '@/components/Calendar';
import QueryKey from '@/tanStackQuery/keys';
import { getEvents } from '@/tanStackQuery/operations';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';
import Loader from './Loader';
import { toasts } from '@/utils';

const App: FC = () => {
  const {
    data: events = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QueryKey.events],
    queryFn: getEvents,
  });

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [error, isError]);

  return (
    <div
      style={{
        width: 1280,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
      }}
    >
      {isLoading ? <Loader /> : <Calendar events={events} />}
    </div>
  );
};

export default App;
