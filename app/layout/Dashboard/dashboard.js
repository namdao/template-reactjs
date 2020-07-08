import React from 'react';
import PropTypes from 'prop-types';
/**
 * Ant template
 */
import 'antd/dist/antd.css';
import './dashboard.css';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
/**
 * Component
 */
import Footer from 'components/Footer';
import MenuBar from './component/MenuBar';
import Breadcrumbs from './component/Breadcrumbs';
import LanguageDropdown from './component/LanguageDropdown';
/**
 * utils
 */
const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <MenuBar />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={this.toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={this.toggle} />
            )}
            <LanguageDropdown />
          </Header>
          <Content className="content">
            <Breadcrumbs {...this.props} />
            <div className="site-layout-background content">
              {children && children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.shape({}),
  listBreadCrumb: PropTypes.arrayOf(PropTypes.shape({})),
};
export default Dashboard;
