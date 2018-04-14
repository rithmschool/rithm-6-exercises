import React from "react";
import "./ColorBlock.css";

const ColorBlock = ({ backgroundColor, onClickProp }) => {
  return (
    <div
      className="ColorBlock"
      style={{ backgroundColor }}
      onClick={onClickProp}
    />
  );
};

export default ColorBlock;
