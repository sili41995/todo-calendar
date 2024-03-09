import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  { title: 'Events', path: PagePaths.eventsPath },
  { title: 'Planning', path: PagePaths.eventPlanningPath },
  { title: 'About', path: PagePaths.aboutPath },
];

export default navLinks;
