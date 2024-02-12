import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';

export const StyledInput = styled.input<IStyledProps>`
  width: 100%;
  /*height: ;
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

export const Label = styled.label``;

export const Title = styled.span``;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AltElem = styled.label<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing()};
  border: 1px solid;
  border-color: ${({ checked, theme }) =>
    checked ? 'transparent' : theme.colors.greyColor};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primaryColor : 'transparent'};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
    background-color ${({ theme }) => theme.transitionDurationAndFunc},
    border-color ${({ theme }) => theme.transitionDurationAndFunc};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;

  & input {
    position: fixed;
    transform: scale(0);
  }

  &:has([type='checkbox']) svg {
    color: ${({ theme, checked }) =>
      checked ? theme.colors.whiteColor : 'transparent'};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
