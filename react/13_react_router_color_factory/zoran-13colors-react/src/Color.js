import React, { Component } from "react";
import { Link } from "react-router-dom";

const Color = ({ color }) => {
  return (
    <div className="color-show" style={{ backgroundColor: color.value }}>
      <h2> this is...{color.name.toUpperCase()} </h2>
      <h2> isn't beautiful </h2>
    </div>
  );
};

//geting color object and render page base on that

export default Color;
