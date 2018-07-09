import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ColorsList from "./ColorsList";
import "./ColorShow.css";

const ColorShow = ({ color }) => {
  return (
    <div className="ColorShow" style={{ backgroundColor: color }}>
      <h2>Here is your beautiful color:</h2>
      <Link to="./colors">
        <h3>Pick another?</h3>
      </Link>
    </div>
  );
};

ColorShow.defaultProps = {
  color: PropTypes.string
};

export default ColorShow;
