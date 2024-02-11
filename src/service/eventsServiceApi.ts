import { Events } from '@/types/types';

class EventsServiceApi {
  private BASE_URL =
    'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos?sortBy=deadline';

  fetchEvents(): Promise<Events> {
    return fetch(`${this.BASE_URL}`).then((response) => response.json());
  }
}

const eventsServiceApi = new EventsServiceApi();

export default eventsServiceApi;
