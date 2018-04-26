import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./ColorShow.css";

const ColorShow = ({ colors, match }) => {
  let foundColor = colors.find(color => {
    return color.name === match.params.color;
  });

  if (foundColor === undefined) {
    return <Redirect from="/" to="/colors" />;
  } else {
    return (
      <div
        className="ColorShow"
        style={{ backgroundColor: `${foundColor.colorValue}` }}
      >
        <ul>
          <li>
            <p className="show__title">{foundColor.name}</p>{" "}
          </li>
          <li>
            <p>Hex Color: {foundColor.colorValue}</p>
          </li>
        </ul>
        <Link to="/colors">Go Back</Link>
      </div>
    );
  }
};
export default ColorShow;
