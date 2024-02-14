import { IconBtnTypes } from '@/constants';
import theme from '@/constants/theme';

const setBtnBGColor = (iconBtnType: IconBtnTypes): string => {
  switch (iconBtnType) {
    case IconBtnTypes.edit:
      return theme.colors.blueBtnColor;

    default:
      return theme.colors.lightgreyColor;
  }
};

export default setBtnBGColor;
