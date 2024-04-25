import styled from '@emotion/styled';
import { IStyledProps } from './CalendarDaysNames.types';
import { getFlexBasisValue } from '@/utils';

export const DaysList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.cellGap}px;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const Day = styled.li<IStyledProps>`
  flex-basis: ${({ theme }) => getFlexBasisValue({ cellGap: theme.cellGap })};
  background-color: ${({ isWeekend, theme }) =>
    isWeekend
      ? theme.colors.weekendBgColor
      : theme.colors.primaryCalendarColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.43;
  text-align: center;
`;
