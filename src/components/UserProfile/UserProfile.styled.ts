import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-left: auto;
  margin-right: auto;
`;

export const UserData = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Manrope;
  font-size: ${({ theme }) => `${theme.fontSize.titleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  ${({ theme }) => theme.trimText}
`;

export const FullName = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Manrope;
  font-size: ${({ theme }) => `${theme.fontSize.subtitleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
  ${({ theme }) => theme.trimText}
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Manrope;
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
  ${({ theme }) => theme.trimText}
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  &:not(:last-child) {
  }
  & p {
    ${({ theme }) => theme.trimText}
  }
`;

export const ContactInfoIconWrap = styled.span`
  display: flex;
  align-items: center;
`;
