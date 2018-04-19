import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ColorLi.css";

const ColorLi = ({ name, hex }) => {
  return (
    <figure className="ColorLi">
      <div style={{ backgroundColor: hex }}>
        <Link className="ColorLi-caption" to={`/colors/${name}`}>
          {name}
        </Link>
      </div>
    </figure>
  );
};

ColorLi.defaultProps = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ColorLi;
