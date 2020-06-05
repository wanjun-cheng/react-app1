export const SYSTEM_NAME = '支付后台管理系统';
export const PAGE_SIZE = 20;
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';


// 页面路径
export const Paths = {
  LOGIN: '/login',
  USER_AUDIT: '/userAudit',
  MERCHANT_MANAGE: '/merchantManage',
  PACK_AUDIT: '/packAudit',
  TOKEN_MANAGE: '/tokenManage',
  ROUTE_MANAGE: '/routeManage',
  PAYMENT_PRODUCTS_MANAGE: '/paymentProductsManage',
  FEATURE_PACK_MANAGE: '/featurePackManage',
  API_MANAGE: '/apiManage',
};

// 审核状态 tag
export const AUDIT_MAP = {
  NEW: {
    label: '待审核',
    color: 'purple',
    value: 1,
  },
  PERMIT: {
    label: '审核通过',
    color: 'cyan',
    value: 2,
  },
  REJECT: {
    label: '审核拒绝',
    color: 'red',
    value: 3,
  },
};

// 启用 禁用状态
export const Status = {
  DISABLED: 0,
  ENABLED: 1,
};

// 启用 禁用状态
export const STATUS = [
  { label: '禁用', value: 0 },
  { label: '启用', value: 1 },
];

// 功能包状态 tag
export const PACK_STATUS_MAP = {
  REDUCE: {
    label: '-', // 减少
    color: 'red',
    value: 1,
    tipText: '- 代表的是本次审核被删除的功能包'
  },
  NO_CHANGE: {
    label: '', // 无变动
    color: 'lime',
    value: 2,
  },
  ADD: {
    label: '+', // 新增
    color: 'cyan',
    value: 3,
    tipText: '+ 代表本次审核新添加的功能包'
  },
  API_CHANGE: { // 接口变动
    label: '',
    color: 'orange',
    value: 4,
  }
};

// 接口状态 tag
export const API_STATUS_MAP = {
  REDUCE: {
    label: '-', // 减少
    color: 'red',
    value: 1,
    tipText: '- 代表删除的接口'
  },
  NO_CHANGE: { // 无变动
    label: '',
    color: 'lime',
    value: 2,
  },
  ADD: {
    label: '+', // 新增
    color: 'cyan',
    value: 3,
    tipText: '+ 代表本次新添加的接口'
  },
};

// 商户状态
export const USER_TYPES = [
  { label: 'portal', value: 1 },
  { label: 'console', value: 2 },
  { label: 'all', value: 3 },
];

// 商户接入状态
export const MerchantStatus = {
  NO_ACCESS: 0,
  ACCESS: 1,
};
