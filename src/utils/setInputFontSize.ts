import { FormTypes, theme } from '@/constants';

const setInputFontSize = (formType: FormTypes): number => {
  switch (formType) {
    case FormTypes.auth:
      return theme.fontSize.secondaryFontSize;

    default:
      return theme.fontSize.primaryFontSize;
  }
};

export default setInputFontSize;
