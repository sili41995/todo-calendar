import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.primaryCalendarColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  padding: ${({ theme }) => theme.spacing(2)};

  @media screen and (max-width: 1279px) {
    align-items: center;
  }
`;

export const Date = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
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
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    gap: ${({ theme }) => theme.spacing(2)};
    justify-content: center;
  }
`;
