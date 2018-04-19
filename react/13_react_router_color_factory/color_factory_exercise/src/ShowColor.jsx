import React from "react";
import { Link, Redirect } from "react-router-dom";

const ShowColor = ({ colorsData, match, history }) => {
  let foundColorData = colorsData.find(oneColorData => {
    return oneColorData.name === match.params.color;
  })
  if (foundColorData === undefined) {
    return <Redirect to="/colors" />
  } else {
    let foundColor = foundColorData.color;
    let foundColorName = foundColorData.name;
    debugger;
    return (
      <div
        style={{ backgroundColor: foundColor, height: "300px" }}
      >
        <h1>Here's {foundColorName}!  Ain't it grand?</h1>
      </div>
    );
  }
};

export default ShowColor;
