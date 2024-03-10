import { Messages, PagePaths } from '@/constants';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import { Func, IUseDeleteEvent } from '@/types/types';
import { toasts } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useDeleteEvent = (onSuccess?: Func): IUseDeleteEvent => {
  const [eventId, setEventId] = useState<string | null>(null);
  const { mutate, isPending: isLoading } = useMutation({
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
    if (pathname.includes(eventId!)) {
      navigate(PagePaths.eventsPath);
    }

    toasts.successToast(Messages.deleteEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKeys.events] });
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.monthlyEvents],
    });
    onSuccess && onSuccess();
  }

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  return { deleteEvent: setEventId, isLoading };
};

export default useDeleteEvent;
