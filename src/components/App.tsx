import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PagePaths from '@/constants/pagePaths';
import SharedLayout from './SharedLayout';

const EventsPage = lazy(() => import('@/pages/EventsPage'));
const EventPlanningPage = lazy(() => import('@/pages/EventPlanningPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<EventsPage />} />
        <Route path={PagePaths.eventsPath} element={<EventsPage />} />
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
