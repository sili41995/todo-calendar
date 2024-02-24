import styled from '@emotion/styled';
import { IStyledProps } from './EventsListItem.types';

export const ListItem = styled.li<IStyledProps>`
  position: relative;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  border-color: ${({ theme }) => theme.colors.lightgreyColor};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }

  & > a {
    display: block;
    padding: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    text-decoration: ${({ completed }) =>
      completed ? 'line-through' : 'none'};
  }

  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
