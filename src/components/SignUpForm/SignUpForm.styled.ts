import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => `${theme.fontSize.titleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Image = styled.img`
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
