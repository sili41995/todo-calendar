import { IconBtnTypes } from '@/constants';
import theme from '@/constants/theme';

const setBtnIconColor = (iconBtnType: IconBtnTypes): string => {
  switch (iconBtnType) {
    case IconBtnTypes.edit:
      return theme.colors.primaryColor;

    default:
      return theme.colors.greyColor;
  }
};

export default setBtnIconColor;
