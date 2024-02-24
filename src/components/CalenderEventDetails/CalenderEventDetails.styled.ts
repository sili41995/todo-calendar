import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;

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
