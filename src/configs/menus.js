import { Paths } from './constants';

const menus = [
  {
    title: '用户管理',
    key: 'userManage',
    // icon: 'user',
    children: [
      {
        title: '用户审核',
        key: 'userAudit',
        path: Paths.USER_AUDIT,
      },
    ]
  },
  {
    title: '商户管理',
    key: 'merchantManage',
    icon: 'shop',
    children: [
      {
        title: '商户管理',
        key: 'merchantManage',
        path: Paths.MERCHANT_MANAGE,
      },
      {
        title: '功能包审核',
        key: 'packAudit',
        path: Paths.PACK_AUDIT,
      },
    ]
  },
  {
    title: '控制中心',
    key: 'controlCenter',
    icon: 'control',
    children: [
      {
        title: 'token管理',
        key: 'tokenManage',
        path: Paths.TOKEN_MANAGE,
      }
    ]
  },
  {
    title: '网关控制',
    key: 'gatewayControl',
    icon: 'gateway',
    children: [
      {
        title: '路由管理',
        key: 'routeManage',
        path: Paths.ROUTE_MANAGE,
      },
    ]
  },
  {
    title: '支付服务管理',
    key: 'paymentManage',
    icon: 'pay-circle',
    children: [
      {
        title: '支付产品管理',
        key: 'paymentProductsManage',
        path: Paths.PAYMENT_PRODUCTS_MANAGE,
      },
      {
        title: '功能包管理',
        key: 'featurePackManage',
        path: Paths.FEATURE_PACK_MANAGE,
      },
      {
        title: 'api接口管理',
        key: 'apiManage',
        path: Paths.API_MANAGE,
      },
    ]
  }
];

export default menus;
