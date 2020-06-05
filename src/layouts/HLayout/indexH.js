import { connect } from 'dva';
import React from 'react';
import _ from 'lodash';
import { Route, Switch, Redirect } from 'dva/router';
import cookie from 'js-cookie';
import { Paths, SYSTEM_NAME } from '../../configs/constants';
import { menus } from '../../configs';
import HBasicLayout from '../../components/HBasicLayout';
import IndexPage from '../../routes/IndexPage';


function BasicLayout({
  dispatch,
  location,
  siteName,
}) {
  const props = {
    siteName,
    user: { username: cookie.get('username') },
    nav: { menus },
    pathname: location.pathname,
    breadcrumb: {
      hide: true
    },
    header: {
      onLogout() {
        dispatch({ type: 'login/logout' });
      },
    },
    footer: {
      title: SYSTEM_NAME,
      content: (
        <>
          Copyright 2018 货车帮
        </>
      ),
    },
  };

  return (
    <HBasicLayout {...props}>
      <Switch>
        <Route
          exact
          path={Paths.USER_AUDIT}
          component={IndexPage}
          breadcrumbName="用户审核"
        />
        <Redirect to='/userAudit' />
      </Switch>
    </HBasicLayout>
  );
}


function mapStateToProps({ layout }) {
  return {
    ...layout,
  };
}

export default connect(mapStateToProps)(BasicLayout);

