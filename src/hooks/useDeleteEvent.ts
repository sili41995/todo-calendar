import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from '@/utils';
import { deleteEvent } from '@/redux/events/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Messages, PagePaths } from '@/constants';
import { Func, IUseDeleteEvent } from '@/types/types';
import { selectIsLoading } from '@/redux/events/selectors';

const useDeleteEvent = (onSuccess?: Func): IUseDeleteEvent => {
  const [eventId, setEventId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const redirectPath = PagePaths.eventsPath + search;
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (eventId) {
      dispatch(deleteEvent(eventId))
        .unwrap()
        .then(() => {
          if (pathname.includes(eventId)) {
            navigate(redirectPath);
          }
          toasts.successToast(Messages.deleteEvent);
          onSuccess && onSuccess();
        })
        .catch((error) => {
          toasts.errorToast(error.message);
        });
    }
  }, [dispatch, eventId, navigate, onSuccess, pathname, redirectPath]);

  return { deleteEvent: setEventId, isLoading };
};

export default useDeleteEvent;
