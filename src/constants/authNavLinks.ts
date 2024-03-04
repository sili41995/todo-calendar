import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const authNavLinks: NavLinks = [
  { title: 'Sign In', path: PagePaths.signInPath },
  { title: 'Sign Up', path: PagePaths.signUpPath },
];

export default authNavLinks;
