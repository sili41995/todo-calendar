import { IOnChangeAvatar } from '@/types/types';

const onChangeAvatar = ({ e, ref }: IOnChangeAvatar): void => {
  if (!e.target.files?.length) {
    return;
  }

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = ((image) => (e) => {
    if (image) {
      image.src = e?.target?.result as string;
    }
  })(ref.current);
  reader.readAsDataURL(file);
};

export default onChangeAvatar;
