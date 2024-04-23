import { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container, MenuOpenBtn } from './MobileMenu.styled';
import { IconSizes, PagePaths } from '@/constants';
import MobileMenuContainer from '@/components/MobileMenuContainer';
import Filter from '@/components/Filter';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { selectEvents } from '@/redux/events/selectors';
import { getIsTargetPage } from '@/utils';

const MobileMenu: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const events = useAppSelector(selectEvents);
  const { pathname } = useLocation();
  const isEventsPage = getIsTargetPage({
    pathname,
    targetPage: PagePaths.eventsPath,
  });
  const showFilter = isEventsPage && Boolean(events.length);

  const setShowMobileMenuState = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <Container>
      {showFilter && <Filter />}
      <MenuOpenBtn type='button' onClick={setShowMobileMenuState}>
        <FaBars size={IconSizes.secondarySize} />
      </MenuOpenBtn>
      {showMobileMenu && (
        <MobileMenuContainer setShowMobileMenu={setShowMobileMenuState} />
      )}
    </Container>
  );
};

export default MobileMenu;
