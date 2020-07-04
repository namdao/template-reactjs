import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RouteConstants from 'service/routes/constants';
import Dashboard from 'layout/Dashboard/dashboard';
import Default from 'layout/Default/default';
import PropTypes from 'prop-types';

class PrivateRoute extends React.PureComponent {
  render() {
    const {
      component: Component,
      authenticated,
      key,
      index,
      path,
      redirect_url: redirectUrl,
      ...rest
    } = this.props || {};
    const redirect = redirectUrl || RouteConstants.PUBLIC.SIGN_IN;
    const LayoutComponent = authenticated ? Dashboard : Default;
    return (
      <Route
        key={`${key}_${index}`}
        path={path}
        {...rest}
        render={(props) => (
          <LayoutComponent>
            {authenticated === true ? (
              <Component />
            ) : (
              <Redirect
                to={{ pathname: redirect, state: { from: props.location } }}
              />
            )}
          </LayoutComponent>
        )}
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
