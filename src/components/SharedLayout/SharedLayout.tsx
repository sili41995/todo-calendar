import { FC, Suspense } from 'react';
import { Header, Main, Section } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import { PagePaths } from '@/constants';
import { getIsTargetPage } from '@/utils';
import Container from '@/components/Container';

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
          <NavigationBar />
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
