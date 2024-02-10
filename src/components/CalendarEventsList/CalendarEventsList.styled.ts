import styled from '@emotion/styled';
import { IStyledProps } from './CalendarEventsList.types';

export const Container = styled.div`
  position: relative;
  background-color: inherit;
`;

export const List = styled.ul<IStyledProps>`
  position: ${({ showFullList }) => (showFullList ? 'absolute' : 'static')};
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ showFullList }) =>
    showFullList ? '#ffffff' : 'inherit'};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing()};
`;

export const ListItem = styled.li``;

export const ShowMoreBtn = styled.button`
  background-color: greenyellow;
  width: 100%;
  border-color: transparent;
  border-radius: 8px;
`;
