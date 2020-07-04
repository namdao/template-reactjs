import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Default from 'layout/Default/default';
import ROUTE_CONSTANTS from 'service/routes/constants';

class PublicRoute extends React.PureComponent {
  render() {
    const {
      component: Component,
      external,
      keyName,
      authenticated,
      index,
      ...rest
    } = this.props || {};
    const isRedirect =
      keyName === ROUTE_CONSTANTS.PUBLIC.SIGN_IN ||
      keyName === ROUTE_CONSTANTS.PUBLIC.SIGN_UP;
    return (
      <Route
        key={`${keyName}_${index}`}
        {...rest}
        render={(props) =>
          authenticated === true && isRedirect ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <Default>
              <Component key={`${keyName}_${index}`} {...props} {...rest} />
            </Default>
          )
        }
      />
    );
  }
}
PublicRoute.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any,
  external: PropTypes.bool,
};
export default PublicRoute;
