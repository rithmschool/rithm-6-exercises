import React, { Component } from "react";
import DivForm from "./DivForm";

class DivList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDiv) {
    this.setState({ divList: [newDiv, ...this.state.divList] });
  }

  render() {
    let divs = this.state.divList.map((div, i) => (
      <div
        style={{
          height: div.height + "px",
          width: div.width + "px",
          backgroundColor: div.backgroundColor
        }}
        key={i}
      />
    ));

    return (
      <div>
        <DivForm addDiv={this.handleAdd} />
        <div id="listArea">{divs}</div>
      </div>
    );
  }
}

export default DivList;
