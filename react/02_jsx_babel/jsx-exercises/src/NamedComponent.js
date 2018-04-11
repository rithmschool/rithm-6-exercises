import React, { Component } from 'react';

class NamedComponent extends Component {
  render() {
    //does render get a 'name' parameter?
    return <p className="NamedComponent">My name is {this.props.name}</p>;
  }
}

export default NamedComponent;
