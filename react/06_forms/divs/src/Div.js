import React, { Component } from "react";

const Div = props => (
  <div
    style={{
      height: `${props.height}px`,
      width: `${props.width}px`,
      backgroundColor: props.backcolor,
      display: "inline-block"
    }}
  />
);

export default Div;
