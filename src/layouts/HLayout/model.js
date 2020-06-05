import cookie from 'js-cookie';
// import { SYSTEM_NAME } from 'configs/constants';

export default {
  namespace: 'layout01',

  state: {
    siteName: '支付后台管理系统',
    user: { username: cookie.get('username') },
  },

  reducers: {},
};
