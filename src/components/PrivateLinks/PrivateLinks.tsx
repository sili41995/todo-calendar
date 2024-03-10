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
import { useMutation } from '@tanstack/react-query';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import Filter from '@/components/Filter';

const PrivateLinks: FC = () => {
  const { pathname } = useLocation();
  const addEventLink = `${PagePaths.eventsPath}/${PagePaths.addNewEventPath}`;
  const isEventPlaningPage = pathname.includes(PagePaths.eventPlanningPath);
  const isEventsPage = pathname.includes(`${PagePaths.eventsPath}/`);
  const navigate = useNavigate();
  const { mutate: signOut } = useMutation({
    mutationFn: operations.signOut,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest() {
    navigate(PagePaths.homePath);
    toasts.successToast(Messages.goodbye);
    queryClient.setQueryData([QueryKeys.isLoggedIn], false);
    queryClient.setQueryData([QueryKeys.user], null);
    queryClient.setQueryData([QueryKeys.token], null);
  }

  const onNewEventLinkClick = (e: LinkClickEvent) => {
    makeBlur(e.currentTarget);
  };

  const onSignOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    signOut();
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
      />
    </Container>
  );
};

export default PrivateLinks;
