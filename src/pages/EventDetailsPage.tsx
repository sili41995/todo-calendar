import CalenderEventDetails from '@/components/CalenderEventDetails';
import PagePaths from '@/constants/pagePaths';
import { QueryKeys, operations } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const id = useParams()[PagePaths.dynamicParam] ?? '';
  const {
    data: event,
    // isLoading,
    // isError,
    // error,
  } = useQuery({
    queryKey: [QueryKeys.events, id],
    queryFn: operations.getEventById,
  });

  return event ? (
    <CalenderEventDetails event={event} />
  ) : (
    <p>event is absent</p>
  );
};

export default EventDetailsPage;
