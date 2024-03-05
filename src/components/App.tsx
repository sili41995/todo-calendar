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

const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const EventDetailsPage = lazy(() => import('@/pages/EventDetailsPage'));
const EventPlanningPage = lazy(() => import('@/pages/EventPlanningPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const { isLoading } = useQuery<User | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.refreshUser(token),
  });

  return isLoading ? (
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
          <Route
            path={`:${PagePaths.dynamicParam}`}
            element={<EventDetailsPage />}
          ></Route>
        </Route>
        <Route
          path={PagePaths.eventPlanningPath}
          element={<EventPlanningPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
