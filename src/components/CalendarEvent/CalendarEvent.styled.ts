import styled from '@emotion/styled';

export const ListItem = styled.li``;

export const EventBtn = styled.button`
  background-color: #8a2be2;
  width: 100%;
  border-color: transparent;
  border-radius: 8px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: #6e22b5;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
