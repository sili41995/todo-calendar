import { Navigate, useLocation } from 'react-router-dom';
import { IProps } from './PrivateRoute.types';
import { PagePaths } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/tanStackQuery';
import { FC, useEffect } from 'react';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const { isLoading } = useQuery({
    queryKey: [QueryKeys.user],
  });
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
    refetchOnWindowFocus: false,
  });
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isLoading;

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
    console.log('isLoading', isLoading);
    console.log('shouldRedirect', shouldRedirect);
  });

  return shouldRedirect ? (
    <Navigate to={PagePaths.homePath} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
