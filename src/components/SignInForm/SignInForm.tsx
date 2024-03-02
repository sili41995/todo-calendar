import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toasts } from '@/utils';
import AuthFormMessage from '@/components/AuthFormMessage';
import Input from '@/components/Input';
import AuthFormBtn from '@/components/AuthFormBtn';
import { ICredentials } from '@/types/types';
import { Messages, InputTypes, PagePaths, ProfileSettings } from '@/constants';
import defaultAvatar from '@/images/default-signin-avatar.png';
import { Form, Message, Title, Image } from './SignInForm.styled';
import { useMutation } from '@tanstack/react-query';
import { operations } from '@/tanStackQuery';

const SignInForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const { mutate: signIn } = useMutation({
    mutationFn: operations.signIn,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  function onSuccessHTTPRequest(data): void {
    console.log(data);
    toasts.successToast(Messages.successfulSignIn);
    return data;
  }

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  useEffect(() => {
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
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    signIn(data);
  };

  return (
    <>
      <Title>sign in</Title>
      <Message>{Messages.greetings}</Message>
      <Image src={defaultAvatar} alt='user avatar' width='150' height='150' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type={InputTypes.email}
          placeholder='Email'
          // icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          // inputWrap
          autoFocus
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
          // icon={<FaLock size={IconSizes.secondaryIconSize} />}
          // inputWrap
        />
        <AuthFormMessage
          action='Sign up'
          pageLink={PagePaths.signUpPath}
          message="if you don't have an account yet"
        />
        <AuthFormBtn
          title='Sign in'
          // disabled={isLoading}
        />
      </Form>
    </>
  );
};

export default SignInForm;
