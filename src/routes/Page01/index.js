import React, { Component, createRef } from 'react';
import { connect } from 'dva';
import Layout from '../../layouts/Layout';
import Children from './Children';



class Page01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDiv: createRef(),
      open: false
    }
    this.handleButton = this.handleButton.bind(this);
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }

  handleButton() {
    console.log("this.myDiv.current", this.state.myDiv.current.value);
  }

  toggleChildMenu() {
    let instance = this.refs.child.wrappedInstance;
    console.log(instance);
  }

  setColor(){
    this.button.setBg(1);
    console.log(this.button);
  }

  render() {
    return (
      <Layout>
        <div>
          {/* <button onClick={this.handleButton}>获取子组件</button>
          <Children myRef={this.state.myDiv} /> */}
          {/* <button onClick={this.toggleChildMenu.bind(this)}>
            Toggle Menu from Parent
          </button>
          <Children ref="child" /> */}
          <button onClick={this.setColor.bind(this)}>设置backgroundColor</button>
          <Children
            // cb={() => { console.log('todo something') }}
            text='下一步'
            bgColor={['#CDCDCD', '#73B2E6', '#0677DA']}
            ref={(button) => {
              this.button = button;
            }}
          ></Children>
        </div>
      </Layout>
    );
  }
}

export default connect(({ page01 }) => ({ ...page01 }),
  dispatch => ({
    actions: {
      fetch(param) {
        // dispatch({ type: 'page01/updateSearch', payload: param });
        dispatch({ type: 'page01/fetch' });
      },
    }
  }))(Page01);
