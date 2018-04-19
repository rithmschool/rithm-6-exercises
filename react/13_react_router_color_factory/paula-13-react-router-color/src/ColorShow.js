import React from "react";
import PropTypes from "prop-types";
import "./ColorShow.css";

const ColorShow = ({ color }) => {
  return (
    <div className="ColorShow" style={{ backgroundColor: color }}>
      <h3>Hi I'm a Show Page</h3>
    </div>
  );
};

ColorShow.defaultProps = {
  color: PropTypes.string
};

export default ColorShow;
