import React from 'react';
import 'antd/dist/antd.css';
import './dashboard.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import Footer from 'components/Footer';

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  renderBreadCumb = () => {
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={this.toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={this.toggle} />
            )}
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            {this.renderBreadCumb()}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: '90%' }}
            >
              {children && children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
