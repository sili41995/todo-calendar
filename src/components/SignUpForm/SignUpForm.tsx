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
import { useMutation } from '@tanstack/react-query';
import { operations } from '@/tanStackQuery';
import { useNavigate } from 'react-router-dom';
import { IProps } from './SignUpForm.types';

const SignUpForm: FC<IProps> = ({ formType }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const { mutate: signUp } = useMutation({
    mutationFn: operations.signUp,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpCredentials>();
  const navigate = useNavigate();
  const userAvatarRef = useRef<HTMLImageElement>(null);

  function onSuccessHTTPRequest(): void {
    toasts.successToast(Messages.successfulSignUp);
    navigate(PagePaths.signInPath);
  }

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

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

    const userData = getProfileFormData(data);
    signUp(userData);
  };

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
          // icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          // inputWrap
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
          // icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          // inputWrap
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
          // icon={<FaLock size={IconSizes.secondaryIconSize} />}
          // inputWrap
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
          // icon={<FaLock size={IconSizes.secondaryIconSize} />}
          // inputWrap
        />
        <AuthFormMessage
          action='Sign in'
          pageLink={PagePaths.signInPath}
          message='if you have an account'
        />
        <AuthFormBtn
          title='Enlist'
          // disabled={isLoading}
        />
      </Form>
    </>
  );
};

export default SignUpForm;
