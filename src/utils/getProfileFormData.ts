import { ISignUpCredentials } from '@/types/types';

const getProfileFormData = (profile: ISignUpCredentials): FormData => {
  const formData = new FormData();

  if (profile.avatar?.length) {
    formData.append('avatar', profile.avatar[0]);
  }

  const keys = Object.keys(profile);

  keys.forEach((key) => {
    if (key !== 'avatar') {
      formData.append(key, String(profile[key]));
    }
  });

  return formData;
};

export default getProfileFormData;
