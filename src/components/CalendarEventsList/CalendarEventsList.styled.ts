import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`;

export const ListItem = styled.li``;

export const EventBtn = styled.button`
  background-color: blueviolet;
  width: 100%;
  border-color: transparent;
  border-radius: 8px;
`;

export const Title = styled.span`
  color: #ffffff;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
