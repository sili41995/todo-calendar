import { FC, Suspense } from 'react';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Loader from '@/components/Loader';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import navLinks from '@/constants/navLinks';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <NavigationBar navLinks={navLinks} />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container>
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
