import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const privateNavLinks: NavLinks = [
  { title: 'Events', path: PagePaths.eventsPath },
  { title: 'Planning', path: PagePaths.eventPlanningPath },
  { title: 'Profile', path: PagePaths.profile },
];

export default privateNavLinks;
