import React, { Component } from "react";
import PersonComponent from "./personComponent.js";

class MultiPersonComponent extends Component {
  render() {
    let person = [
      <PersonComponent
        name="Tombush"
        age="15"
        hobbies={["run", "walk", "swim"]}
      />,
      <PersonComponent
        name="Batmanjoker"
        age="25"
        hobbies={["love", "eat", "pray"]}
      />,
      <PersonComponent
        name="Rosebushes"
        age="20"
        hobbies={["tennis", "badminton", "dive"]}
      />,
      <PersonComponent
        name="John"
        age="30"
        hobbies={["france", "england", "germany"]}
      />
    ];

    return (
      <div>
        <p>{person}</p>
      </div>
    );
  }
}

export default MultiPersonComponent;
