import styled from '@emotion/styled';

export const Header = styled.header`
  display: inline-block;
  min-width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.otherColor};
`;

export const Container = styled.div`
  width: ${({ theme }) =>
    theme.containerWidth.desktop + theme.padding.containerPadding * 2}px;
  padding-left: ${({ theme }) => `${theme.padding.containerPadding}px`};
  padding-right: ${({ theme }) => `${theme.padding.containerPadding}px`};
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main``;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.padding.containerPadding}px;
  padding-bottom: ${({ theme }) => theme.padding.containerPadding}px;
`;
