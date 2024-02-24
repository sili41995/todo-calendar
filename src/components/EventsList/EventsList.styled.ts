import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  flex-grow: 1;
  /* width: 900px; */
`;
