import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li``;
