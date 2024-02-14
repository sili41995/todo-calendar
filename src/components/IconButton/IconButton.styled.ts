import styled from '@emotion/styled';
import { IStyledProps } from './IconButton.types';
import { setBtnBGColor, setBtnIconColor } from '@/utils';

export const Button = styled.button<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 36px;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  background-color: ${({ iconBtnType }) => setBtnBGColor(iconBtnType)};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }

  & svg {
    color: ${({ iconBtnType }) => setBtnIconColor(iconBtnType)};
  }
`;
