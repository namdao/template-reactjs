import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as RouteConstants from 'routes/constants';
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
    const redirect = redirectUrl || RouteConstants.SIGN_IN;
    return [
      <Route
        key={`${key}_${index}`}
        path={path}
        {...rest}
        render={(props) =>
          authenticated === true ? (
            <Component />
          ) : (
            <Redirect
              to={{ pathname: redirect, state: { from: props.location } }}
            />
          )
        }
      />,
    ];
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
