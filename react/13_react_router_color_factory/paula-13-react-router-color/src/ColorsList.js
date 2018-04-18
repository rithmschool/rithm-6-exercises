import React from "react";
import Color from "./Dino";

const ColorsList = ({ colors }) => {
  return (
    <section>
      {colors.map((d, i) => <Color name={d.name} value={d.value} key={i} />)}
    </section>
  );
};

export default ColorsList;
