import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getProfileFormData, onChangeAvatar, toasts } from '@/utils';
import Input from '@/components/Input';
import AuthFormBtn from '@/components/AuthFormBtn';
import AuthFormMessage from '@/components/AuthFormMessage';
import { ISignUpCredentials } from '@/types/types';
import {
  regExp,
  InputTypes,
  Messages,
  PagePaths,
  ProfileSettings,
} from '@/constants';
import image from '@/images/default-profile-avatar.png';
import { Form, Message, Title, Image } from './SignUpForm.styled';
import { useNavigate } from 'react-router-dom';
import { IProps } from './SignUpForm.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signUpUser } from '@/redux/auth/operations';
import { selectIsLoading } from '@/redux/auth/selectors';

const SignUpForm: FC<IProps> = ({ formType }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpCredentials>();
  const navigate = useNavigate();
  const userAvatarRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const signInPageLink = PagePaths.signInPath;
  const isLoading = useAppSelector(selectIsLoading);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const onSubmit: SubmitHandler<ISignUpCredentials> = (data) => {
    if (userAvatar) {
      data.avatar = userAvatar;
    }

    const userFormData = getProfileFormData(data);

    dispatch(signUpUser(userFormData))
      .unwrap()
      .then(() => {
        toasts.successToast('User has been successfully registered');
        navigate(signInPageLink);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  useEffect(() => {
    errors.name && toasts.errorToast('First name is required');
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordMinLengthErr
      );
  }, [errors, isSubmitting]);

  useEffect(() => {
    errors.name && toasts.errorToast(Messages.nameReqErr);
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordMinLengthErr
      );
    errors.passwordRepeat && toasts.errorToast(Messages.passwordRepeatErr);
  }, [errors, isSubmitting]);

  return (
    <>
      <Title>Sign up</Title>
      <Message>{Messages.greetings}!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept='image/png, image/jpeg, image/jpg'
          onChange={onChangeInput}
          type={InputTypes.file}
          formType={formType}
          altElem={
            <Image
              src={image}
              alt='profile avatar'
              width='150'
              height='150'
              ref={userAvatarRef}
            />
          }
        />
        <Input
          settings={{
            ...register('name', {
              required: true,
            }),
          }}
          type={InputTypes.text}
          placeholder='Name'
          formType={formType}
          autoFocus
        />
        <Input
          settings={{
            ...register('email', {
              required: true,
              pattern: regExp.emailRegExp,
            }),
          }}
          type={InputTypes.email}
          placeholder='Email'
          formType={formType}
        />
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: ProfileSettings.passMinLength,
            }),
          }}
          type={InputTypes.text}
          placeholder='Password'
          formType={formType}
        />
        <Input
          settings={{
            ...register('passwordRepeat', {
              required: true,
            }),
          }}
          type={InputTypes.text}
          placeholder='Repeat password'
          formType={formType}
        />
        <AuthFormMessage
          action='Sign in'
          pageLink={PagePaths.signInPath}
          message='if you have an account'
        />
        <AuthFormBtn title='Enlist' disabled={isLoading} />
      </Form>
    </>
  );
};

export default SignUpForm;
