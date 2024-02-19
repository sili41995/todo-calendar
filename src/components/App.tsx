import { FC, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Calendar from '@/components/Calendar';
import Loader from '@/components/Loader';
import { toasts } from '@/utils';
import { QueryKeys, operations } from '@/tanStackQuery';

const App: FC = () => {
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
