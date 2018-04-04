import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = ({ children }) => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
