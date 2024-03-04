import { NavContainer } from './NavigationBar.styled';
import { FC } from 'react';
import NavLinks from '@/components/NavLinks';
import { authNavLinks, navLinks } from '@/constants';

const NavigationBar: FC = () => {
  return (
    <NavContainer>
      <NavLinks navLinks={navLinks} />
      <NavLinks navLinks={authNavLinks} />
    </NavContainer>
  );
};

export default NavigationBar;
