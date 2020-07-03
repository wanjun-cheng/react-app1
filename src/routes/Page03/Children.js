import React, { Component } from 'react';


function Children() {

  return (
    <div ref={this.props.myRef} >我是子组件</div>
  );
}

export default Children;