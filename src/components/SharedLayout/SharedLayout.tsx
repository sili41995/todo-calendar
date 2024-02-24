import { FC, Suspense } from 'react';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import navLinks from '@/constants/navLinks';
import PagePaths from '@/constants/pagePaths';
import { getIsTargetPage } from '@/utils';

const SharedLayout: FC = () => {
  const { pathname } = useLocation();
  const isEventsPage = getIsTargetPage({
    pathname,
    targetPage: PagePaths.eventsPath,
  });

  return (
    <>
      <Header>
        <Container>
          <NavigationBar navLinks={navLinks} />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isEventsPage={isEventsPage}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};

export default SharedLayout;
