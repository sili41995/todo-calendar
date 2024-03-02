import AuthForm from '@/components/AuthForm';
import SignUpForm from '@/components/SignUpForm';
import { FC } from 'react';

const SignUpPage: FC = () => (
  <AuthForm>
    <SignUpForm />
  </AuthForm>
);

export default SignUpPage;
