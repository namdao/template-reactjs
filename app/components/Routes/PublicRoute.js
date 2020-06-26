import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PublicRoute extends React.PureComponent {
  render() {
    const { component: Component, external, key, index, ...rest } = this.props || {};
    return [
      <Route
        key={`${key}_${index}`}
        {...rest}
        render={(props) => <Component {...props} {...rest} />}
      />,
    ];
  }
}
PublicRoute.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any,
  external: PropTypes.bool,
};
export default PublicRoute;
