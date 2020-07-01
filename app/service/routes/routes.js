import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import RoutesList from './routesList';

const Routes = ({ token }) => {
  const authenticated = token !== '';
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
Routes.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Routes;
