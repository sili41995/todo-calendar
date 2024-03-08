import {
  Events,
  ICredentials,
  IEvent,
  IEventsInfo,
  IFetchEventByIdProps,
  IFetchEventsByMonthProps,
  IToken,
  IUpdateEventProps,
  NewEvent,
  NewUser,
  User,
} from '@/types/types';

class EventsServiceApi {
  private BASE_URL = 'https://events-rest-api.onrender.com';
  private TOKEN: string | null = null;

  get token() {
    return this.TOKEN;
  }

  set token(newToken) {
    this.TOKEN = newToken;
  }

  signUp(data: FormData): Promise<NewUser> {
    const options = {
      method: 'POST',
      body: data,
    };

    return fetch(`${this.BASE_URL}/api/auth/signup`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  signIn(data: ICredentials): Promise<IToken> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/api/auth/signin`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  refreshUser(): Promise<User> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/auth/current`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchEvents(): Promise<IEventsInfo> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/events`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  fetchEventById({ id }: IFetchEventByIdProps): Promise<IEvent> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/events/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  fetchEventsByMonth({
    month,
    year,
  }: IFetchEventsByMonthProps): Promise<Events> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(
      `${this.BASE_URL}/api/events/monthly?month=${month}&year=${year}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }

        return data;
      });
  }

  addEvent(data: NewEvent): Promise<IEvent> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/events`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  deleteEvent(id: string): Promise<IEvent> {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/events/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }

  updateEvent({ id, data }: IUpdateEventProps): Promise<IEvent> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${this.TOKEN}`,
      },
    };

    return fetch(`${this.BASE_URL}/api/events/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }
}

const eventsServiceApi = new EventsServiceApi();

export default eventsServiceApi;
