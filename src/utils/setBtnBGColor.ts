import { IconBtnTypes, theme } from '@/constants';

const setBtnBGColor = (iconBtnType: IconBtnTypes): string => {
  switch (iconBtnType) {
    case IconBtnTypes.edit:
      return theme.colors.blueBtnColor;

    case IconBtnTypes.delete:
      return theme.colors.redBtnColor;

    case IconBtnTypes.cancel:
      return theme.colors.redBtnColor;

    case IconBtnTypes.deleteTransparent:
      return 'transparent';

    case IconBtnTypes.accept:
      return theme.colors.greenBtnColor;

    case IconBtnTypes.reset:
      return theme.colors.redBtnColor;

    case IconBtnTypes.signOut:
      return theme.colors.redBtnColor;

    default:
      return theme.colors.lightgreyColor;
  }
};

export default setBtnBGColor;
