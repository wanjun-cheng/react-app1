import React, { Component } from 'react';


class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ['#fff', '#CDCDCD']
    }
  }

  setBg(num) {
    const { bgColor } = this.props;
    this.setState({ bgColor: bgColor[num] });
  }

  render() {
    return (
      <div>
        <p style={{ backgroundColor: this.state.bgColor }}>
          需要在子组件传递 ref，然后在子组件暴露外部调用方法。最后只需要在父组件中调用该方法 this.button.setBg();
        </p>
      </div>
    );
  }
}

export default Children;