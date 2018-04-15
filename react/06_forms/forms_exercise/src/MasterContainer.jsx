import React, { Component } from "react";
import Form from "./Form";
import DivComponent from "./DivComponent";

export default class MasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divData: [{
        height: "100px",
        width: "100px",
        backgroundColor: "blue"
      },
      {
        height: "100px",
        width: "100px",
        backgroundColor: "purple"
      }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(data) {
    this.setState(prevState => {
      return {
        divData: [data, ...prevState.divData]
      }
    })
  }

  render() {
    let divs = this.state.divData.map(data => {
      return <DivComponent
        width={data.width}
        height={data.height}
        backgroundColor={data.backgroundColor}
      />
    })
    return (
      <div>
        <Form handleAdd={this.handleAdd} />
        {divs}
      </div>
    );
  }
}
