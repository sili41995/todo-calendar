import styled from '@emotion/styled';
import { IStyledProps } from './Container.types';

export const Wrapper = styled.div<IStyledProps>`
  position: relative;
  width: 100%;
  display: ${({ isEventsPage }) => (isEventsPage ? 'flex' : 'block')};
  gap: ${({ isEventsPage, theme }) => (isEventsPage ? theme.spacing(5) : 0)};
  flex-direction: column;
  align-items: center;
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;
