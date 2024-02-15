import { Messages } from '@/constants';
import { Events, IEvent, IUpdateEvent, NewEvent } from '@/types/types';

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
        throw new Error(Messages.addEventErr);
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
        throw new Error(Messages.deleteEventErr);
      }

      return response.json();
    });
  }

  updateEvent({ event, id }: IUpdateEvent): Promise<IEvent> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error(Messages.updateEventErr);
      }

      return response.json();
    });
  }
}

const eventsServiceApi = new EventsServiceApi();

export default eventsServiceApi;
