import { FC } from 'react';
import { BtnTitle, Container } from './PrivateLinks.styled';
import {
  AriaLabels,
  IconBtnTypes,
  IconSizes,
  Messages,
  PagePaths,
} from '@/constants';
import { SlLogout, SlPlus } from 'react-icons/sl';
import LinkWithQuery from '@/components/LinkWithQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeBlur, toasts } from '@/utils';
import { BtnClickEvent, LinkClickEvent } from '@/types/types';
import IconButton from '@/components/IconButton';
import Filter from '@/components/Filter';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signOutUser } from '@/redux/auth/operations';
import { selectIsLoading } from '@/redux/events/selectors';
import { IProps } from './PrivateLinks.types';

const PrivateLinks: FC<IProps> = ({ setShowMobileMenu }) => {
  const { pathname } = useLocation();
  const addEventLink = `${PagePaths.eventsPath}/${PagePaths.addNewEventPath}`;
  const isEventPlaningPage = pathname.includes(PagePaths.eventPlanningPath);
  const isEventsPage = pathname.includes(`${PagePaths.eventsPath}/`);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const onNewEventLinkClick = (e: LinkClickEvent) => {
    makeBlur(e.currentTarget);
    setShowMobileMenu && setShowMobileMenu();
  };

  const onSignOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    dispatch(signOutUser())
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.goodbye);
        navigate(PagePaths.homePath);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <Container>
      {isEventsPage && <Filter />}
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
        disabled={isLoading}
      />
    </Container>
  );
};

export default PrivateLinks;
