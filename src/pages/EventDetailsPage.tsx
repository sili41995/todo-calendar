import CalenderEventDetails from '@/components/CalenderEventDetails';
import DefaultMessage from '@/components/DefaultMessage';
import Loader from '@/components/Loader';
import { Messages } from '@/constants';
import PagePaths from '@/constants/pagePaths';
import { QueryKeys, operations } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const id = useParams()[PagePaths.dynamicParam] ?? '';
  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QueryKeys.events, id],
    queryFn: operations.getEventById,
  });

  return (
    <>
      {isLoading && <Loader />}
      {event && <CalenderEventDetails event={event} />}
      {isError && <DefaultMessage message={error.message} />}
    </>
  );
};

export default EventDetailsPage;
