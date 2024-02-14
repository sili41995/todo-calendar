import { Events, IEvent, NewEvent } from '@/types/types';

class EventsServiceApi {
  private BASE_URL = 'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos';

  fetchEvents(): Promise<Events> {
    return fetch(`${this.BASE_URL}`).then((response) => response.json());
  }

  addEvent(data: NewEvent): Promise<IEvent> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      return response.json();
    });
  }

  deleteEvent(id: string): Promise<IEvent> {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      return response.json();
    });
  }
}

const eventsServiceApi = new EventsServiceApi();

export default eventsServiceApi;
