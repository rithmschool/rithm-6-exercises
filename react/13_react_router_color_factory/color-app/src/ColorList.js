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
    <div className="list__background">
      <br />
      <h1>Color Lists Are The Best!</h1>
      <div className="main__section">
        <div>
          <ul>{colorList}</ul>
        </div>
      </div>
    </div>
  );
};

export default ColorList;
