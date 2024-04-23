import { createAsyncThunk } from '@reduxjs/toolkit';
import eventsServiceApi from '@/service/eventsServiceApi';
import {
  IEvent,
  IEventsInfo,
  INewEvent,
  IUpdateEventProps,
} from '@/types/types';

export const fetchEvents = createAsyncThunk<
  IEventsInfo,
  string,
  { rejectValue: string }
>(
  'events/fetchAll',
  async (page, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const contacts = await eventsServiceApi.fetchEvents(page);
      return contacts;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addEvent = createAsyncThunk<
  IEvent,
  INewEvent,
  { rejectValue: string }
>(
  'events/addEvent',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await eventsServiceApi.addEvent(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteEvent = createAsyncThunk<
  IEvent,
  string,
  { rejectValue: string }
>(
  'events/deleteEvent',
  async (id: string, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await eventsServiceApi.deleteEvent(id);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateEvent = createAsyncThunk<
  IEvent,
  IUpdateEventProps,
  { rejectValue: string }
>(
  'events/updateEvent',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await eventsServiceApi.updateEvent(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
