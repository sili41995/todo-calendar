import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  & > button {
    height: auto;
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};

    & > svg {
      transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    }

    &:is(:hover, :focus) {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.greyColor};

      & > svg {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }
`;
