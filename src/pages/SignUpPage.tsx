import AuthForm from '@/components/AuthForm';
import SignUpForm from '@/components/SignUpForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const SignUpPage: FC = () => (
  <AuthForm>
    <SignUpForm formType={FormTypes.auth} />
  </AuthForm>
);

export default SignUpPage;
