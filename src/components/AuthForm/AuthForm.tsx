import { FC } from 'react';
import { IProps } from './AuthForm.types';
import { Container } from './AuthForm.styled';

const AuthForm: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default AuthForm;
