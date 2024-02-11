import Calendar from '@/components/Calendar';
import { Events } from '@/types/types';
import { useEffect, useState } from 'react';

const App = () => {
  const [events, setEvents] = useState<Events | null>(null);

  useEffect(() => {
    const getEvents = async () => {
      const result = await fetch(
        'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos?sortBy=deadline'
      ).then((data) => data.json());

      setEvents(result);
    };

    getEvents();
  }, []);

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
