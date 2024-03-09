import { FormTypes } from '@/constants';

const setInputHeight = (formType: FormTypes): number => {
  switch (formType) {
    case FormTypes.auth:
      return 60;

    default:
      return 40;
  }
};

export default setInputHeight;
