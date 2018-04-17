import React, { Component } from "react";

export default class Gif extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt="gif"
          width="150px"
          margin="10px"
          display="float-left"
        />
      </div>
    );
  }
}
