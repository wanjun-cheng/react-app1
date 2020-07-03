import React, { useState } from 'react';
import { connect } from 'dva';
import Layout from '../../layouts/Layout';
import { Tree } from 'antd';
import UpdateTitleModal from './UpdateTitleModal';


const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];


function IndexPage({ actions }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({});


  const onSelect = (selectedKeys, info) => {
    setModalVisible(true);
    setData(info.node);
    // 连通model
    actions.fetch();
  };

  const changeData = (items, values) => {
    if (items == undefined) {
      return;
    }
    items.forEach((item, i) => {
      // var dd = JSON.parse(JSON.stringify(items));
      if (item.key == data.key) {
        item.title = values.title;
        // dd.splice(i,1,{key: item.key, title: values.title, children: item.children && item.children});
        return;
      } else {
        changeData(item.children, values);
      }
    });
  }

  const onOk = (values) => {
    changeData(treeData, values);
    setModalVisible(false);
  }

  const modalProps = {
    visible: modalVisible,
    data: data,
    onCancel: () => setModalVisible(false),
    onOk: onOk
  };

  return (
    <Layout>
      <Tree
        checkable
        onSelect={onSelect}
        treeData={treeData}
      />
      <UpdateTitleModal {...modalProps} />
    </Layout>
  );
}


export default connect(({ interview }) => ({ ...interview }),
  dispatch => ({
    actions: {
      fetch(param) {
        // dispatch({ type: 'interview/updateSearch', payload: param });
        dispatch({ type: 'interview/fetch' });
      },
    }
  }))(IndexPage);
