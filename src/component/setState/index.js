import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
    constructor(){
      super();
      this.state = {
        name: 'aa'
    }
  }
  componentWillMount(){
      this.setState({
        name: 'aa' + 1
    });
    console.log(this.state.name); //aa
    this.setState({
        name: 'aa' + 1
    });
    console.log(this.state.name); //aa
  }
  render() {
    return <div>
      <div>Hello {this.props.name}</div>
      <div>Hello {this.state.name}</div>
    </div>;
  }
}
