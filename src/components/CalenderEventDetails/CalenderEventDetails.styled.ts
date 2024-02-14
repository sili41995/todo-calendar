import styled from '@emotion/styled';

export const Container = styled.div`
  & > button {
    margin-left: auto;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li``;
