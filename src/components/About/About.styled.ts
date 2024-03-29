import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.spacing()};
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: justify;
`;
