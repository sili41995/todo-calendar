import AuthForm from '@/components/AuthForm';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const SignInPage: FC = () => (
  <AuthForm>
    <SignInForm formType={FormTypes.auth} />
  </AuthForm>
);

export default SignInPage;
