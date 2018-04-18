import React from "react";
import Color from "./Color";
import PropTypes from "prop-types";

const Color = ({ name, value }) => {
  return (
    <figure>
      <div style={{ backgroundColor: { value } }} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Color;

Color.defaultProps = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};
