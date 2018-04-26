import React, { Component } from 'react';

class SecondComponent extends Component {
  render() {
    return (
      <div>
        <h2>My second component.</h2>
      </div>
    );
  }
}

//or another way you could do it... is with a functional component.
//Functional components can never have state,
//but its a preferred (for performance) for small, non-dynamic components.

let SecondComponent2 = () => {
  return <h2>My secondcomponent</h2>;
};
