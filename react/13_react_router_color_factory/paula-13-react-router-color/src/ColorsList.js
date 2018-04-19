import React from "react";
import ColorLi from "./ColorLi";
import PropTypes from "prop-types";
import "./ColorsList.css";

const ColorsList = ({ colors }) => {
  return (
    <section className="ColorsList">
      {colors.map((d, i) => <ColorLi name={d.name} value={d.value} key={i} />)}
    </section>
  );
};

ColorsList.defaultProps = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ColorsList;
