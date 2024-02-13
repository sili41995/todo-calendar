import styled from '@emotion/styled';
import { IStylesProps } from './CalendarEvent.types';

export const ListItem = styled.li``;

export const EventBtn = styled.button`
  background-color: #8a2be2;
  width: 100%;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #6e22b5;
  }
`;

export const Title = styled.span<IStylesProps>`
  color: ${({ theme }) => theme.colors.whiteColor};
  text-decoration: ${({ completed }) => (completed ? ' line-through' : 'none')};
  font-family: Manrope;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
