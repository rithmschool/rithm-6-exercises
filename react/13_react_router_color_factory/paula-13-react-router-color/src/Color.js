import React from "react";
import PropTypes from "prop-types";

const Color = ({ name, value }) => {
  return (
    <figure>
      <div style={{ backgroundColor: { value } }} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

Color.defaultProps = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Color;
