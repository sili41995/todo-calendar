import styled from '@emotion/styled';

export const DaysList = styled.ul`
  display: flex;
  gap: 1px;
`;

export const Day = styled.li`
  flex-basis: calc((100% - 6px) / 7);
  height: 100px;
  background-color: #101112;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Number = styled.p`
  color: #ffffff;
  text-align: end;
`;
