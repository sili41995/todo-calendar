import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';

export const StyledInput = styled.input<IStyledProps>`
  /* width: 100%;
  max-width: ;
  height: ;
  background-color: transparent;
  border: 1px solid color????;
  border-radius: ??????;
  padding: ????????;
  font-family: Inter;
  color: ??????;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ???????;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:focus {
    outline: none;
    border-color: ???????;
  } */
`;

export const Label = styled.label<IStyledProps>`
  /* display: flex;
  align-items: center;
  justify-content: center;
  & input {
    position: fixed;
    transform: scale(0);
  }
  &:has([type='checkbox']) svg {
    width: ?????;
    height: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border: 1px solid;
    border-color: ${({ checked }) => (checked ? 'transparent' : '??????')};
    border-radius: ????????;
    background-color: ${({ checked }) =>
    checked ? '??????????' : 'transparent'};
    color: ${({ theme, checked }) =>
    checked ? theme.colors.whiteColor : 'transparent'};
    cursor: pointer;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc},
      border-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ???????;
    }
  } */
`;
