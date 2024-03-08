import { Messages, PagePaths } from '@/constants';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import { DeleteFunc, Func } from '@/types/types';
import { toasts } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useDeleteEvent = (onSuccess?: Func): DeleteFunc => {
  const [eventId, setEventId] = useState<string | null>(null);
  const { mutate } = useMutation({
    mutationFn: operations.deleteEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    eventId && mutate(eventId);
  }, [eventId, mutate]);

  function onSuccessHTTPRequest() {
    toasts.successToast(Messages.deleteEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKeys.events] });
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.monthlyEvents],
    });
    onSuccess && onSuccess();

    if (pathname.includes(eventId!)) {
      navigate(PagePaths.eventsPath);
    }
  }

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  return setEventId;
};

export default useDeleteEvent;
