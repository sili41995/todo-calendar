import Calendar from '@/components/Calendar';
import { Todos } from '@/types/types';
import { useEffect, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState<Todos | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      const result = await fetch(
        'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos?sortBy=deadline'
      ).then((data) => data.json());

      setTodos(result);
    };

    getTodos();
  }, []);

  return (
    <div
      style={{
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
      }}
    >
      {todos && <Calendar todos={todos} />}
    </div>
  );
};

export default App;
