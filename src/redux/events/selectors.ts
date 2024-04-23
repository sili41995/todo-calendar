import { IState } from '@/types/types';

export const selectEvents = (state: IState) => state.events.items;

export const selectError = (state: IState) => state.events.error;

export const selectIsLoading = (state: IState) => state.events.isLoading;

export const selectCount = (state: IState) => state.events.count;
