import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  let colorList = colors.map(color => (
    <li>
      <Link to={`/colors/${color.name}`}>{color.name}</Link>
    </li>
  ));
  return (
    <div className="main__section">
      <ul>{colorList}</ul>
    </div>
  );
};

export default ColorList;
