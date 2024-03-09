import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  & > a {
    display: flex;
    gap: ${({ theme }) => theme.spacing(5)};
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
    background-color: ${({ theme }) => theme.colors.greenBtnColor};
    padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};

    &:is(:hover, :focus) {
      background-color: ${({ theme }) => theme.colors.greenColor};
    }
  }

  & > button {
    display: flex;
    gap: ${({ theme }) => theme.spacing(5)};
    width: auto;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
    padding: ${({ theme }) => `0 ${theme.spacing(3)}`};
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    transition: background-color
        ${({ theme }) => theme.transitionDurationAndFunc},
      color ${({ theme }) => theme.transitionDurationAndFunc};

    & svg {
      transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    }

    &:is(:hover, :focus) {
      background-color: ${({ theme }) => theme.colors.redIconColor};
      color: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: none;

      & svg {
        color: ${({ theme }) => theme.colors.whiteColor};
        transition: color ${({ theme }) => theme.transitionDurationAndFunc};
      }
    }
  }
`;

export const BtnTitle = styled.span``;
