import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({theme})=>theme.borderRadius.primaryBorderRadius}px;
  box-shadow: 0 8px 20px 8px #888888;
  overflow: hidden;
`;

export const ControlsContainer = styled.div`
  background-color: #dadce0;
  padding: 1px;
`;

export const DaysContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.cellGap}px;
  flex-direction: column;
  background-color: #dadce0;
  padding: 1px;
`;
