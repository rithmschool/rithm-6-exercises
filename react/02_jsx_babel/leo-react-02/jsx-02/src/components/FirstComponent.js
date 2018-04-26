import React, { Component } from 'react';

class FirstComponent extends Component {
  render() {
    return (
      <div>
        <h1>My very first component.</h1>
      </div>
    );
  }
}

//or another way you could do it... is with a functional component.
//Functional components can never have state,
//but its a preferred (for performance) for small, non-dynamic components.

let FirstComponent2 = () => {
  return <h1>My very first component</h1>;
};

export default FirstComponent
export default FirstComponent2