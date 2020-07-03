import React, { Component } from 'react';


class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '失败',
      bgColor: ['#fff', '#CDCDCD']
    }
  }

  haha(ref) {
    this.wrappedInstance = ref;
  }

  setBg(num){
    console.log(this.props.bgColor);
    this.setState({ bgColor: this.props.bgColor[num] });
  }

  render() {
    return (
      <div>
        {/* 我是子组件: <input ref={this.props.myRef} placeholder="placeholder" /> */}
        {/* <div ref={this.haha.bind(this)}>{this.state.title}</div> */}
        <div style={{ backgroundColor: this.state.bgColor }}>{this.state.title}</div>
      </div>
    );
  }
}

export default Children;