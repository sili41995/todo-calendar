import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.primaryCalendarColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Date = styled.p`
  font-family: Manrope;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const Month = styled.strong``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(20)};
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
`;

export const ButtonsListItem = styled.li``;
