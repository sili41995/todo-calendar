import { NavContainer } from './NavigationBar.styled';
import { FC } from 'react';
import NavLinks from '@/components/NavLinks';
import { authNavLinks, navLinks, privateNavLinks } from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import { useAppSelector } from '@/hooks/redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';

const NavigationBar: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const links = isLoggedIn ? [...navLinks, ...privateNavLinks] : navLinks;

  return (
    <NavContainer>
      <NavLinks navLinks={links} />
      {isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
    </NavContainer>
  );
};

export default NavigationBar;
