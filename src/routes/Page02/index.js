import React, { Component } from 'react';
import Layout from '../../layouts/Layout';
import Children from './Children';



class Page02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '父组件改变子组件的状态（父组件调用子组件的方法）',
    }
  }

  setColor() {
    // console.log(this.button);
    this.button.setBg(1);
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>{this.state.title}</h3>
          <Children
            text='下一步'
            bgColor={['#CDCDCD', '#73B2E6', '#0677DA']}
            ref={(button) => {
              this.button = button;
            }}
          ></Children>
          <button onClick={this.setColor.bind(this)}>设置 backgroundColor</button>
        </div>
      </Layout>
    );
  }
}

export default Page02;

