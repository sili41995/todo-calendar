import Calendar from '@/components/Calendar';
import { GeneralParams, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchEventsByMonth } from '@/redux/events/operations';
import { selectEvents } from '@/redux/events/selectors';
import { BtnClickEvent } from '@/types/types';
import { getMonthsParams, makeBlur } from '@/utils';
import { addMonths, format } from 'date-fns';
import { FC, useEffect } from 'react';

const EventPlanningPage: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const month = searchParams.get(SearchParamsKeys.month) ?? '';
  const year = searchParams.get(SearchParamsKeys.year) ?? '';
  const monthsParams = getMonthsParams({ year, month });
  const { targetDate, targetYear, targetMonthNumber } = monthsParams;
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);

  useEffect(() => {
    dispatch(
      fetchEventsByMonth({
        month: targetMonthNumber,
        year: targetYear,
      })
    );
  }, [dispatch, targetMonthNumber, targetYear]);

  useEffect(() => {
    console.log(events);
  });

  const onIncrementBtnClick = (e: BtnClickEvent) => {
    const newDate = addMonths(targetDate, 1);
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

  const onDecrementBtnClick = (e: BtnClickEvent) => {
    const newDate = addMonths(targetDate, -1);
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

  const onTodayBtnClick = (e: BtnClickEvent) => {
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

  return (
    <Calendar
      onIncrementBtnClick={onIncrementBtnClick}
      onDecrementBtnClick={onDecrementBtnClick}
      onTodayBtnClick={onTodayBtnClick}
      monthsParams={monthsParams}
      events={events}
    />
  );
};

export default EventPlanningPage;
