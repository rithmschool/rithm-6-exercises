import React from "react";

const Div = ({ width, height, backgroundColor }) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: backgroundColor
    }}
  />
);

export default Div;
