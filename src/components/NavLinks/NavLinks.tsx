import { FC } from 'react';
import { IProps } from './NavLinks.types';
import { List, ListItem } from './NavLinks.styled';
import { NavLink } from 'react-router-dom';

const NavLinks: FC<IProps> = ({ navLinks }) => (
  <List>
    {navLinks.map(({ path, title }) => (
      <ListItem key={path}>
        <NavLink to={path}>{title}</NavLink>
      </ListItem>
    ))}
  </List>
);

export default NavLinks;
