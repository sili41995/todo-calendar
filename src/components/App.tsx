import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PagePaths } from '@/constants';
import SharedLayout from './SharedLayout';
import { QueryKeys, operations } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/types';
import Loader from '@/components/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const EventDetailsPage = lazy(() => import('@/pages/EventDetailsPage'));
const EventPlanningPage = lazy(() => import('@/pages/EventPlanningPage'));
const NewEventPage = lazy(() => import('@/pages/NewEventPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const { isFetching } = useQuery<User | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.refreshUser(token),
  });

  return isFetching ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.signUpPath}
          element={<PublicRoute restricted element={<SignUpPage />} />}
        />
        <Route
          path={PagePaths.signInPath}
          element={<PublicRoute restricted element={<SignInPage />} />}
        />
        <Route
          path={PagePaths.eventsPath}
          element={<PrivateRoute element={<EventsPage />} />}
        >
          <Route path={PagePaths.addNewEventPath} element={<NewEventPage />} />
          <Route
            path={`:${PagePaths.dynamicParam}`}
            element={<EventDetailsPage />}
          />
        </Route>
        <Route
          path={PagePaths.eventPlanningPath}
          element={<PrivateRoute element={<EventPlanningPage />} />}
        />
        <Route
          path={PagePaths.aboutPath}
          element={<PrivateRoute element={<AboutPage />} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
