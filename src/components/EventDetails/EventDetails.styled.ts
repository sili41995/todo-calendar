import styled from '@emotion/styled';
import { IStyledDeadlineProps, IStyledStatusProps } from './EventDetails.types';

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: 1.33;

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Deadline = styled.strong<IStyledDeadlineProps>`
  color: ${({ theme, isPast }) =>
    isPast ? theme.colors.lightgreyColor : theme.colors.primaryFontColor};
`;

export const Status = styled.strong<IStyledStatusProps>`
  color: ${({ theme, completed }) =>
    completed ? theme.colors.greenColor : '#ff0000'};
`;
