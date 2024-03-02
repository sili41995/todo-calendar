import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PagePaths } from '@/constants';
import SharedLayout from './SharedLayout';

const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const EventsPage = lazy(() => import('@/pages/EventsPage'));
const EventDetailsPage = lazy(() => import('@/pages/EventDetailsPage'));
const EventPlanningPage = lazy(() => import('@/pages/EventPlanningPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<EventsPage />} />
        <Route path={PagePaths.signUpPath} element={<SignUpPage />} />
        <Route path={PagePaths.eventsPath} element={<EventsPage />}>
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
