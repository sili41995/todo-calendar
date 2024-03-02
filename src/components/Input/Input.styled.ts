import styled from '@emotion/styled';
import { IStyledProps } from './Input.types';

export const StyledInput = styled.input<IStyledProps>`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.lightgreyColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-right: ${({ theme }) => theme.spacing()};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()};
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  letter-spacing: 0.04em;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AltElem = styled.label<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1.75)};
  border: 2px solid;
  border-color: ${({ checked, theme }) =>
    checked ? 'transparent' : theme.colors.lightgreyColor};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primaryColor : 'transparent'};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc},
    background-color ${({ theme }) => theme.transitionDurationAndFunc},
    border-color ${({ theme }) => theme.transitionDurationAndFunc};

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

export const ImgAltElem = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  & input {
    position: fixed;
    transform: scale(0);
  }
`;
