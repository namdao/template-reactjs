import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RouteConstants from 'service/routes/constants';
import Dashboard from 'layout/Dashboard/dashboard';
import PropTypes from 'prop-types';
import ROUTES from 'service/routes/routesList';
import { getBreadCrumb } from 'utils/utility';

class PrivateRoute extends React.PureComponent {
  render() {
    const {
      component: Component,
      authenticated,
      keyName,
      index,
      path,
      redirect_url: redirectUrl,
      ...rest
    } = this.props || {};
    const redirect = redirectUrl || RouteConstants.PUBLIC.SIGN_IN;
    return (
      <Route
        key={`${keyName}_${index}`}
        path={path}
        {...rest}
        render={(props) => {
          const crumbs = getBreadCrumb(props, ROUTES.PRIVATE);
          return (
            <Dashboard listBreadCrumb={crumbs}>
              {authenticated === true ? (
                <Component />
              ) : (
                <Redirect
                  to={{ pathname: redirect, state: { from: props.location } }}
                />
              )}
            </Dashboard>
          );
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any,
  authenticated: PropTypes.bool,
  redirect_url: PropTypes.string,
};
PrivateRoute.defaultProps = {
  redirect_url: null,
};
export default PrivateRoute;
