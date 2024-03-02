import { FC } from 'react';
import Loader from '@/components/Loader';
import { IProps } from './AuthFormBtn.types';
import { BtnTypes } from '@/constants';
import { Button } from './AuthFormBtn.styled';

const AuthFormBtn: FC<IProps> = ({ title, disabled = false }) => (
  <Button disabled={disabled} type={BtnTypes.submit}>
    {disabled ? <Loader /> : title}
  </Button>
);

export default AuthFormBtn;
