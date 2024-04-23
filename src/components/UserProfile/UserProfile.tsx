import { ChangeEvent, FC, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import {  Messages } from '@/constants';
import { IAvatar } from '@/types/types';
import { getProfileFormData, onChangeAvatar, toasts } from '@/utils';
import ImageContainer from '@/components/ImageContainer';
import { useAppDispatch } from '@/hooks/redux';
import { updateUserAvatar } from '@/redux/auth/operations';
import { IProps } from './UserProfile.types';
import {
  Email,
  Name,
  UserData,
  Container,
} from './UserProfile.styled';

const UserProfile: FC<IProps> = ({ user }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const userAvatarRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();

  const { name, avatar, email } = user;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    if (!userAvatar?.length) {
      return;
    }

    data.avatar = userAvatar;
    const userFormData = getProfileFormData(data);

    dispatch(updateUserAvatar(userFormData))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.updateAvatar);
        setUserAvatar(null);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onCancelBtnClick = () => {
    if (userAvatarRef.current) {
      userAvatarRef.current.src = avatar;
      setUserAvatar(null);
    }
  };

  return (
    <Container>
      <Name>{name}</Name>
      <UserData>
        <ImageContainer
          avatar={avatar as string}
          avatarRef={userAvatarRef}
          updateAvatar={userAvatar}
          handleFormSubmit={handleFormSubmit}
          onChangeInput={onChangeInput}
          onCancelBtnClick={onCancelBtnClick}
          imgSize='150'
        />
        <Email>{email}</Email>
      </UserData>
    </Container>
  );
};

export default UserProfile;
