import { createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import eventsServiceApi from '@/service/eventsServiceApi';
import {
  IState,
  ISignInRes,
  ICredentials,
  ISignUpRes,
  IAvatar,
  IUser,
} from '@/types/types';

export const signUpUser = createAsyncThunk<
  ISignUpRes,
  FormData,
  { rejectValue: string }
>(
  'auth/signUpUser',
  async (
    credentials: FormData,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await eventsServiceApi.signUp(credentials);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signInUser = createAsyncThunk<
  ISignInRes,
  ICredentials,
  { rejectValue: string }
>(
  'auth/signInUser',
  async (
    credentials: ICredentials,
    { rejectWithValue }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await eventsServiceApi.signIn(credentials);
      if (response instanceof Error) {
        throw new Error('Wrong username or password');
      }
      eventsServiceApi.token = response.token;
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const signOutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>(
  'auth/signOutUser',
  async (_, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      await eventsServiceApi.signOut();
      eventsServiceApi.token = initialState.auth.token;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>(
  'auth/refreshUser',
  async (
    _,
    {
      rejectWithValue,
      getState,
    }: { rejectWithValue: Function; getState: Function }
  ) => {
    const state = getState() as IState;
    const { token } = state.auth;
    try {
      eventsServiceApi.token = token;
      const response = await eventsServiceApi.refreshUser();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUserAvatar = createAsyncThunk<
  IAvatar,
  FormData,
  { rejectValue: string }
>(
  'auth/updateUserAvatar',
  async (
    data: FormData,
    { rejectWithValue }: { rejectWithValue: Function }
  ) => {
    try {
      const response = await eventsServiceApi.updateUserAvatar(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
