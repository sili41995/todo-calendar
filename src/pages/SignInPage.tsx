import AuthForm from '@/components/AuthForm';
import SignInForm from '@/components/SignInForm';
import { FC } from 'react';

const SignInPage: FC = () => (
  <AuthForm>
    <SignInForm />
  </AuthForm>
);

export default SignInPage;
