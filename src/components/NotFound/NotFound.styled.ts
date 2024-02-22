import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
