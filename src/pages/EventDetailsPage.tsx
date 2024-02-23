import PagePaths from '@/constants/pagePaths';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const id = useParams()[PagePaths.dynamicParam];

  return <div>{id}</div>;
};

export default EventDetailsPage;
