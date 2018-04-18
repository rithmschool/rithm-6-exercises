import React from "react";
import Color from "./Color";
import PropTypes from "prop-types";

const ColorsList = ({ colors }) => {
  return (
    <section>
      {colors.map((d, i) => <Color name={d.name} value={d.value} key={i} />)}
    </section>
  );
};

ColorsList.defaultProps = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ColorsList;
