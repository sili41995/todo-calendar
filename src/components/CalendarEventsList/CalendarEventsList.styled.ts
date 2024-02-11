import styled from '@emotion/styled';
import { IStyledProps } from './CalendarEventsList.types';

export const List = styled.ul<IStyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const ListItem = styled.li``;

export const ShowMoreBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  width: 100%;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
