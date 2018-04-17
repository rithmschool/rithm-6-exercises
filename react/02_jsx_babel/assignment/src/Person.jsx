import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const drink =
      this.props.age > 21 ? <h3>Have A drink!</h3> : <h3>No Drink For You!</h3>;
    const hobbyz = this.props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>{this.props.name}</h3>
        <h3>{this.props.age}</h3>
        {drink}
        <h3>hobbies</h3>
        <ul>{hobbyz}</ul>
      </div>
    );
  }
}

export default Person;
