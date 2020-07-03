import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { Layout } from './layouts';
import IndexPage from './routes/IndexPage';
import Interview from './routes/Interview';
import Page01 from './routes/Page01';
import Page02 from './routes/Page02';
import Page03 from './routes/Page03';



function RouterConfig({ history }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          {/* <Route path={Paths.LOGIN} component={pages.Login} /> */}
          <Route path="/" exact component={Layout} />
          <Route path="/home" exact component={IndexPage} />
          <Route path="/interview" exact component={Interview} />
          <Route path="/page01" exact component={Page01} />
          <Route path="/page02" exact component={Page02} />
          <Route path="/page03" exact component={Page03} />
          {/* <Redirect to="/home" /> */}
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
