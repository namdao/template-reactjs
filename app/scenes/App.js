/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Routes from 'service/routes';
import CommonService from 'service/commonService';
import GlobalStyle from '../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js"
      defaultTitle="React.js Boilerplate"
    ></Helmet>
    <Routes />
    <CommonService />
    <GlobalStyle />
  </AppWrapper>
);
export default App;
