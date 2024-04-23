import { IState } from '@/types/types';

const initialState: IState = {
  events: {
    items: [],
    count: null,
    isLoading: false,
    error: null,
  },
  auth: {
    user: {
      name: null,
      email: null,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
};

export default initialState;