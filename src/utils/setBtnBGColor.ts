import { IconBtnTypes } from '@/constants';
import theme from '@/constants/theme';

const setBtnBGColor = (iconBtnType: IconBtnTypes): string => {
  switch (iconBtnType) {
    case IconBtnTypes.edit:
      return theme.colors.blueBtnColor;

    case IconBtnTypes.delete:
      return theme.colors.redBtnColor;

    case IconBtnTypes.accept:
      return theme.colors.greenBtnColor;

    case IconBtnTypes.reset:
      return theme.colors.redBtnColor;

    default:
      return theme.colors.lightgreyColor;
  }
};

export default setBtnBGColor;
