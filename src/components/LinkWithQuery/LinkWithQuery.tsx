import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';
import { FC } from 'react';

const LinkWithQuery: FC<IProps> = ({ children, to, ...otherProps }) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} {...otherProps}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
