import { createAsyncThunk } from '@reduxjs/toolkit';
import eventsServiceApi from '@/service/eventsServiceApi';
import {
  Events,
  IEvent,
  IEventsInfo,
  IFetchEventsByMonthProps,
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
      const result = await eventsServiceApi.fetchEvents(page);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchEventsByMonth = createAsyncThunk<
  Events,
  IFetchEventsByMonthProps,
  { rejectValue: string }
>(
  'events/fetchEventsByMonth',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const result = await eventsServiceApi.fetchEventsByMonth(data);
      return result;
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
      const result = await eventsServiceApi.addEvent(data);
      return result;
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
      const result = await eventsServiceApi.deleteEvent(id);
      return result;
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
      const result = await eventsServiceApi.updateEvent(data);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
