import React, { Component } from 'react';

class Person extends Component {
  render() {
    let hobbyLis = this.props.hobbies.map(hobby => <li>{hobby}</li>);
    let ageComponent;
    let nameComponent;
    if (this.props.name.length >= 8) {
      let slicedName = this.props.name.slice(0, 7);
      nameComponent = <h3>{slicedName}</h3>;
    } else {
      nameComponent = <h3>{this.props.name}</h3>;
    }

    if (+this.props.age < 21) {
      ageComponent = <h3>You must be 21</h3>;
    } else {
      ageComponent = <h3>Lets Grab A Drink</h3>;
    }
    return (
      <p>
        Learn some information about this person: Name:{this.props.name} Age:{
          this.props.age
        }
        {ageComponent}
        {nameComponent}
        <ul>{hobbyLis}</ul>
      </p>
    );
  }
}

export default Person;
