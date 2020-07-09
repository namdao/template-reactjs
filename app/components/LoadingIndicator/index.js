import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
const LoadingIndicator = ({ tip }) => (
  <Wrapper>
    <Spin wrapperClassName="spinner" tip={tip} />
  </Wrapper>
);
LoadingIndicator.propTypes = {
  tip: PropTypes.string,
};
LoadingIndicator.defaultProps = {
  tip: '',
};
export default LoadingIndicator;
