import { FC, useState } from 'react';
import { getEvents, makeBlur } from '@/utils';
import { GeneralParams } from '@/constants';
import CalendarEvent from '@/components/CalendarEvent';
import { BtnClickEvent } from '@/types/types';
import { IProps } from './CalendarEventsList.types';
import { List, ListItem, ShowMoreBtn } from './CalendarEventsList.styled';

const CalendarEventsList: FC<IProps> = ({ events }) => {
  const [showFullList, setShowFullList] = useState<boolean>(false);
  const isMoreMaxQuantity = events.length > GeneralParams.maxEventsCount;
  const filteredEvents = isMoreMaxQuantity ? getEvents(events) : events;
  const listOfEvents = showFullList ? events : filteredEvents;
  const showMoreBtnTitle = showFullList ? 'Hide' : 'Show more';

  const onShowMoreBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setShowFullList((prevState) => !prevState);
  };

  return (
    <List showFullList={showFullList}>
      {listOfEvents.map((event) => (
        <CalendarEvent key={event._id} event={event} />
      ))}
      {isMoreMaxQuantity && (
        <ListItem>
          <ShowMoreBtn onClick={onShowMoreBtnClick}>
            {showMoreBtnTitle}
          </ShowMoreBtn>
        </ListItem>
      )}
    </List>
  );
};

export default CalendarEventsList;
