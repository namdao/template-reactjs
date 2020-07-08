import React from 'react';
import { Spin } from 'antd';
import Wrapper from './Wrapper';
const LoadingIndicator = () => (
  <Wrapper>
    <Spin wrapperClassName="spinner" tip="Loading..." />
  </Wrapper>
);

export default LoadingIndicator;
