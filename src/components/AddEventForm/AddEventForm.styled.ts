import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
`;

export const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;
