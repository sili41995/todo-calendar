import { IconBtnTypes } from '@/constants';
import theme from '@/constants/theme';

const setBtnIconColor = (iconBtnType: IconBtnTypes): string => {
  switch (iconBtnType) {
    case IconBtnTypes.edit:
      return theme.colors.primaryColor;

    case IconBtnTypes.delete:
      return theme.colors.redIconColor;

    default:
      return theme.colors.greyColor;
  }
};

export default setBtnIconColor;
