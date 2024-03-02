import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.authFormBGColor};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  margin: ${({ theme }) => theme.spacing(10)} auto auto;
`;
