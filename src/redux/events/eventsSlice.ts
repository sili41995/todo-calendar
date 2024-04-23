import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '@/redux/initialState';
import { addEvent, deleteEvent, fetchEvents, updateEvent } from './operations';
import { signOutUser } from '@/redux/auth/operations';
import { IEventsState } from '@/types/types';

const eventsState: IEventsState = initialState.events;

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        error: initialState.events.error,
        items: payload.events,
        count: payload.count,
      }))
      .addCase(addEvent.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
        count: (state.count as number) + 1,
      }))
      .addCase(deleteEvent.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ _id }) => _id !== payload._id),
        count: (state.count as number) - 1,
      }))
      .addCase(updateEvent.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [
          ...state.items.filter(({ _id }) => _id !== payload._id),
          payload,
        ],
      }))
      .addCase(signOutUser.fulfilled, (state) => ({
        ...state,
        ...initialState.events,
      }))
      .addMatcher(
        isAnyOf(
          fetchEvents.pending,
          addEvent.pending,
          deleteEvent.pending,
          updateEvent.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
        })
      )
      .addMatcher(
        isAnyOf(
          fetchEvents.rejected,
          addEvent.rejected,
          deleteEvent.rejected,
          updateEvent.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default eventsSlice.reducer;
