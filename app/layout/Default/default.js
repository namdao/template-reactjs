import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './default.css';
import { Layout } from 'antd';
import { doNothing } from 'utils/utility';

const { Header, Footer, Content } = Layout;

const Default = ({ header, children, footer, customClassLayout }) => {
  const showHeader = () => header();

  const showContent = () => children;

  const showFooter = () => footer();

  const classLayout = `default-layout ${customClassLayout}`;
  return (
    <Layout className={classLayout}>
      <Header className="header-container">{showHeader()}</Header>
      <Content className="main-container">{showContent()}</Content>
      <Footer className="footer-container">{showFooter()}</Footer>
    </Layout>
  );
};
Default.propTypes = {
  header: PropTypes.func,
  children: PropTypes.shape({}),
  footer: PropTypes.func,
  customClassLayout: PropTypes.string,
};
Default.defaultProps = {
  header: doNothing,
  children: doNothing,
  footer: doNothing,
  customClassLayout: '',
};
export default Default;
