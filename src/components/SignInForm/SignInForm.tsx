import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toasts } from '@/utils';
import AuthFormMessage from '@/components/AuthFormMessage';
import Input from '@/components/Input';
import AuthFormBtn from '@/components/AuthFormBtn';
import { ICredentials,  } from '@/types/types';
import { Messages, InputTypes, PagePaths, ProfileSettings } from '@/constants';
import defaultAvatar from '@/images/default-signin-avatar.png';
import { Form, Message, Title, Image } from './SignInForm.styled';
import { IProps } from './SignInForm.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signInUser } from '@/redux/auth/operations';
import { selectIsLoading } from '@/redux/auth/selectors';

const SignInForm: FC<IProps> = ({ formType }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

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
    dispatch(signInUser(data))
      .unwrap()
      .then(() => {
        toasts.successToast('Hello, my friend!');
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
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
          formType={formType}
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
          formType={formType}
          placeholder='Password'
        />
        <AuthFormMessage
          action='Sign up'
          pageLink={PagePaths.signUpPath}
          message="if you don't have an account yet"
        />
        <AuthFormBtn title='Sign in' disabled={isLoading} />
      </Form>
    </>
  );
};

export default SignInForm;
