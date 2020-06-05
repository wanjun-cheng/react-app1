import React from 'react';
import { Link } from 'dva/router';
import classNames from 'classnames';

import hcb from './hcb.gif';

export default ({ logo, setting, siteName, collapsed, renderLogo, style }) => {
  const { theme, layout } = setting;

  const lightCls = classNames({
    'h-basic-layout-top-menu-light': theme === 'light',
  });

  const className =
    layout === 'sidemenu' ? 'h-basic-layout-sider-logo' : 'h-basic-layout-top-menu-logo';

  return (
    <div className={lightCls} style={style}>
      {renderLogo ? (
        renderLogo({ collapsed, setting })
      ) : (
        <div key="logo" id="logo" className={className}>
          <Link to="/">
            <img src={logo || hcb} alt="logo" style={{ height: 20 }} />
            <h1 style={{ fontSize: 18, marginLeft: 6 }}>
              {siteName.length > 10 ? `${siteName.slice(0, 10)}...` : siteName}
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};
