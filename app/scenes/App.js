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

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import Routes from 'service/routes';
import CommonService from 'service/commonService';
import GlobalStyle from '../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
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
    <Footer />
    <GlobalStyle />
  </AppWrapper>
);
export default App;
