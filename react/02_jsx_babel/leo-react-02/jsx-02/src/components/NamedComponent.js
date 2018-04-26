import React, { Component } from 'react';

class NamedComponent extends Component {
  render() {
    let name = 'Leo';
    return <p>My name is {name}</p>;
  }
}

//functional, stateless component way
let NamedComponent2 = () => {
  let name = 'Leo2';
  return <p>My name is {name}</p>;
};

export default NamedComponent
export default NamedComponent2