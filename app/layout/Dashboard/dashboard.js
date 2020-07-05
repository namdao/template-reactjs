import React from 'react';
import PropTypes from 'prop-types';
/**
 * Ant template
 */
import 'antd/dist/antd.css';
import './dashboard.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
/**
 * Component
 */
import Footer from 'components/Footer';
/**
 * utils
 */
import ROUTES from 'service/routes/routesList';
import { FormattedMessage } from 'react-intl';
import history from 'utils/history';

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  currentMenu = ROUTES.MENU.find(
    (menu) => menu.path === history.location.pathname,
  );

  renderBreadCrumb = () => {
    const { listBreadCrumb } = this.props;
    if (listBreadCrumb.length < 1) return null;
    return (
      <Breadcrumb className="breadcrumb">
        {listBreadCrumb.map(({ alias, keyName, path }, index) => {
          const last = listBreadCrumb.length - 1 === index;
          const hasLink = last ? null : path;
          return (
            <Breadcrumb.Item key={keyName}>
              <a href={hasLink}>
                {typeof alias === 'object' ? (
                  <FormattedMessage {...alias} />
                ) : (
                  <span>{alias}</span>
                )}
              </a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  };

  renderMenu = () => (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[this.currentMenu.key.toString()]}
    >
      {ROUTES.MENU.map((item) => {
        const { icon: Icon, alias: menuName, path, key } = item || {};
        return (
          <Menu.Item key={key} icon={<Icon />}>
            <a href={path}>
              <FormattedMessage {...menuName} />
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

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
          {this.renderMenu()}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={this.toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={this.toggle} />
            )}
          </Header>
          <Content className="content">
            {this.renderBreadCrumb()}
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
  children: PropTypes.func,
  listBreadCrumb: PropTypes.shape([]),
};
export default Dashboard;
