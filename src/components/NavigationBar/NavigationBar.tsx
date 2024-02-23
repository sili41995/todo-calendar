import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './NavigationBar.styled';
import { IProps } from './NavigationBar.types';
import { FC } from 'react';

const NavigationBar: FC<IProps> = ({ navLinks }) => {
  return (
    <NavContainer>
      <List>
        {navLinks.map(({ path, title }) => (
          <ListItem key={path}>
            <NavLink to={path}>{title}</NavLink>
          </ListItem>
        ))}
      </List>
    </NavContainer>
  );
};

export default NavigationBar;
