import { NavContainer } from './NavigationBar.styled';
import { FC } from 'react';
import NavLinks from '@/components/NavLinks';
import { authNavLinks, navLinks } from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';

const NavigationBar: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <NavLinks navLinks={navLinks} />
      {isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
    </NavContainer>
  );
};

export default NavigationBar;
