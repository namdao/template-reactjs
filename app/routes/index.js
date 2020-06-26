import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import RoutesList from './routesList';

const Routes = () => {
  const authenticated = !!localStorage.access_token;
  return (
    <Switch>
      {RoutesList.PRIVATE.map((privateRoute, index) => (
        <PrivateRoute
          authenticated={authenticated}
          {...privateRoute}
          {...index}
        />
      ))}
      {RoutesList.PUBLIC.map((publicRoute, index) => (
        <PublicRoute {...publicRoute} {...index} />
      ))}
    </Switch>
  );
};

export default Routes;
