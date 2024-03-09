import { NavContainer } from './NavigationBar.styled';
import { FC } from 'react';
import NavLinks from '@/components/NavLinks';
import { authNavLinks, navLinks } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/tanStackQuery';
import PrivateLinks from '@/components/PrivateLinks';

const NavigationBar: FC = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  return (
    <NavContainer>
      <NavLinks navLinks={navLinks} />
      {isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
    </NavContainer>
  );
};

export default NavigationBar;
