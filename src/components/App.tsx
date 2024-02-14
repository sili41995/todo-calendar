import Calendar from '@/components/Calendar';
import QueryKey from '@/tanStackQuery/keys';
import { getEvents } from '@/tanStackQuery/operations';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const { data: events } = useQuery({
    queryKey: [QueryKey.events],
    queryFn: getEvents,
  });

  return (
    <div
      style={{
        width: 1280,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
      }}
    >
      {events && <Calendar events={events} />}
    </div>
  );
};

export default App;
