import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => `${theme.fontSize.titleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Image = styled.img`
  align-self: center;
  border-radius: 50%;
`;
