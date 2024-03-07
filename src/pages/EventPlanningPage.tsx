import Calendar from '@/components/Calendar';
import Loader from '@/components/Loader';
import { GeneralParams, SearchParamsKeys } from '@/constants';
import useSetSearchParams from '@/hooks/useSetSearchParams';
import { QueryKeys, operations } from '@/tanStackQuery';
import { ClickEvent } from '@/types/types';
import { getMonthsParams, makeBlur, toasts } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { addMonths, format } from 'date-fns';
import { FC, useEffect } from 'react';

const EventPlanningPage: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const month = searchParams.get(SearchParamsKeys.month) ?? '';
  const year = searchParams.get(SearchParamsKeys.year) ?? '';
  const monthsParams = getMonthsParams({ year, month });
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.events],
    queryFn: operations.getEvents,
  });
  const calendarEvents = data?.events || [];

  useEffect(() => {
    isError && toasts.errorToast(error.message);
  }, [error, isError]);

  const onIncrementBtnClick = (e: ClickEvent) => {
    const newDate = addMonths(monthsParams.targetDate, 1);
    const month = format(newDate, GeneralParams.monthNumericFormat);
    const year = format(newDate, GeneralParams.yearNumericFormat);
    updateSearchParams({
      key: SearchParamsKeys.year,
      value: year,
    });
    updateSearchParams({
      key: SearchParamsKeys.month,
      value: month,
    });

    makeBlur(e.currentTarget);
  };

  const onDecrementBtnClick = (e: ClickEvent) => {
    const newDate = addMonths(monthsParams.targetDate, -1);
    const month = format(newDate, GeneralParams.monthNumericFormat);
    const year = format(newDate, GeneralParams.yearNumericFormat);
    updateSearchParams({
      key: SearchParamsKeys.year,
      value: year,
    });
    updateSearchParams({
      key: SearchParamsKeys.month,
      value: month,
    });

    makeBlur(e.currentTarget);
  };

  const onTodayBtnClick = (e: ClickEvent) => {
    const currentDate = new Date();
    const month = format(currentDate, GeneralParams.monthNumericFormat);
    const year = format(currentDate, GeneralParams.yearNumericFormat);
    updateSearchParams({
      key: SearchParamsKeys.year,
      value: year,
    });
    updateSearchParams({
      key: SearchParamsKeys.month,
      value: month,
    });

    makeBlur(e.currentTarget);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Calendar
      onIncrementBtnClick={onIncrementBtnClick}
      onDecrementBtnClick={onDecrementBtnClick}
      onTodayBtnClick={onTodayBtnClick}
      monthsParams={monthsParams}
      events={calendarEvents}
    />
  );
};

export default EventPlanningPage;
