import CalendarEventDetails from '@/components/CalendarEventDetails';
import Loader from '@/components/Loader';
import { FetchStatuses, PagePaths } from '@/constants';
import eventsServiceApi from '@/service/eventsServiceApi';
import { IEvent } from '@/types/types';
import { toasts } from '@/utils';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetailsPage: FC = () => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [fetchContactStatus, setFetchContactStatus] = useState<FetchStatuses>(
    () => FetchStatuses.idle
  );
  const id = useParams()[PagePaths.dynamicParam];
  const isLoading = fetchContactStatus === FetchStatuses.pending;

  useEffect(() => {
    const getContact = async (id: string) => {
      setFetchContactStatus(FetchStatuses.pending);
      try {
        const event = await eventsServiceApi.fetchEventById(id);
        setEvent(event);
        setFetchContactStatus(FetchStatuses.resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      }
    };

    id && getContact(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {event && <CalendarEventDetails event={event} setEvent={setEvent} />}
    </>
  );
};

export default EventDetailsPage;
