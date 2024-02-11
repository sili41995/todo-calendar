import { FC, useState } from 'react';
import { IProps } from './CalendarEventsList.types';
import { List, ListItem, ShowMoreBtn } from './CalendarEventsList.styled';
import { getEvents, makeBlur } from '@/utils';
import { GeneralParams } from '@/constants';
import CalendarEvent from '@/components/CalendarEvent';
import { ClickEvent } from '@/types/types';

const CalendarEventsList: FC<IProps> = ({ events }) => {
  const [showFullList, setShowFullList] = useState<boolean>(false);
  const isMoreMaxQuantity = events.length > GeneralParams.maxEventsCount;
  const filteredEvents = isMoreMaxQuantity ? getEvents(events) : events;

  const onShowMoreBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setShowFullList((prevState) => !prevState);
  };

  return (
    <List showFullList={showFullList}>
      {(showFullList ? events : filteredEvents).map((event) => (
        <CalendarEvent key={event.id} event={event} />
      ))}
      {isMoreMaxQuantity && (
        <ListItem>
          <ShowMoreBtn onClick={onShowMoreBtnClick}>
            {showFullList ? 'Hide' : 'Show more'}
          </ShowMoreBtn>
        </ListItem>
      )}
    </List>
  );
};

export default CalendarEventsList;
