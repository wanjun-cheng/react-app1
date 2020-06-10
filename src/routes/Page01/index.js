import React from 'react';
import { connect } from 'dva';
import Layout from '../../layouts/Layout';


function page01() {
  return (
    <Layout>
      <div>
        page01
      </div>
    </Layout>
  );
}

export default connect()(page01);
