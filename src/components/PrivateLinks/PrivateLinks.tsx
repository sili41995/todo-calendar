import { FC } from 'react';
import { BtnTitle, Container } from './PrivateLinks.styled';
import { AriaLabels, IconBtnTypes, IconSizes, PagePaths } from '@/constants';
import { SlLogout, SlPlus } from 'react-icons/sl';
import LinkWithQuery from '@/components/LinkWithQuery';
import { useLocation } from 'react-router-dom';
import { makeBlur } from '@/utils';
import { BtnClickEvent, LinkClickEvent } from '@/types/types';
import IconButton from '@/components/IconButton';

const PrivateLinks: FC = () => {
  const { pathname } = useLocation();
  const addEventLink = `${PagePaths.eventsPath}/${PagePaths.addNewEventPath}`;
  const isEventPlaningPage = pathname.includes(PagePaths.eventPlanningPath);

  const onNewEventLinkClick = (e: LinkClickEvent) => {
    makeBlur(e.currentTarget);
  };

  const onSignOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      {!isEventPlaningPage && (
        <LinkWithQuery to={addEventLink} onClick={onNewEventLinkClick}>
          <SlPlus />
          <BtnTitle>New Event</BtnTitle>
        </LinkWithQuery>
      )}
      <IconButton
        iconBtnType={IconBtnTypes.signOut}
        onClick={onSignOutBtnClick}
        icon={<SlLogout size={IconSizes.secondarySize} />}
        title='Sign Out'
        ariaLabel={AriaLabels.signOut}
      />
    </Container>
  );
};

export default PrivateLinks;
