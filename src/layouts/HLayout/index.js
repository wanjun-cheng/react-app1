import { connect } from 'dva';
import { Switch, Route, Link, Redirect } from 'dva/router';

import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  CloudOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import cookie from 'js-cookie';
import Page01 from '../../routes/Page01';

import styles from './layout.less';

const { Header, Content, Footer, Sider } = Layout;

function BasicLayout({
  dispatch,
  siteName,
}) {
  const props = {
    siteName,
    user: { username: cookie.get('username') },
  };

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to='/page01'>nav 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
        </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
        </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
        </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
        </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles.site_layout} style={{ marginLeft: 200 }}>
        <Header className={styles.site_layout_background} style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className={styles.site_layout_background} style={{ padding: 24, textAlign: 'center' }}>
            ...
            content
            {/* <Switch> */}
              <Route path="/page01" exact component={Page01} />
              {/* <Redirect to="/page01" /> */}
            {/* </Switch> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}


function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

export default connect(mapStateToProps)(BasicLayout);