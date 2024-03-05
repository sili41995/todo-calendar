import {
  ICredentials,
  IEvent,
  IEventsInfo,
  IFetchEventByIdProps,
  IToken,
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

  // private BASE_URL = 'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos';
  // fetchEvents(): Promise<Events> {
  //   return fetch(`${this.BASE_URL}`).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(Messages.fetchEventsErr);
  //     }
  //     return response.json();
  //   });
  // }
  // fetchEventById(id: string): Promise<IEvent> {
  //   return fetch(`${this.BASE_URL}/${id}`).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(Messages.fetchEventByIdErr);
  //     }
  //     return response.json();
  //   });
  // }
  // addEvent(data: NewEvent): Promise<IEvent> {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   };
  //   return fetch(`${this.BASE_URL}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(Messages.addEventErr);
  //     }
  //     return response.json();
  //   });
  // }
  // deleteEvent(id: string): Promise<IEvent> {
  //   const options = {
  //     method: 'DELETE',
  //   };
  //   return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(Messages.deleteEventErr);
  //     }
  //     return response.json();
  //   });
  // }
  // updateEvent({ event, id }: IUpdateEvent): Promise<IEvent> {
  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify(event),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   };
  //   return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(Messages.updateEventErr);
  //     }
  //     return response.json();
  //   });
  // }
}

const eventsServiceApi = new EventsServiceApi();

export default eventsServiceApi;
