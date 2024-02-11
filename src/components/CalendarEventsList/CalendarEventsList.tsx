import { FC, useState } from 'react';
import { IProps } from './CalendarEventsList.types';
import {
  Container,
  List,
  ListItem,
  ShowMoreBtn,
} from './CalendarEventsList.styled';
import { getEvents } from '@/utils';
import { GeneralParams } from '@/constants';
import CalendarEvent from '@/components/CalendarEvent';

const CalendarEventsList: FC<IProps> = ({ events }) => {
  const [showFullList, setShowFullList] = useState<boolean>(false);
  const isMoreMaxQuantity = events.length > GeneralParams.maxEventsCount;
  const filteredEvents = isMoreMaxQuantity ? getEvents(events) : events;

  const onShowMoreBtnClick = () => {
    setShowFullList((prevState) => !prevState);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default CalendarEventsList;
