import React, { Component } from "react";
import ColorBlock from "./ColorBlock";
import randomColors from "./randomColors.js";

export default class ColoredBlocks extends Component {
  render() {
    const coloredBlocks = randomColors.map((color, i) => (
      <ColorBlock key={i} backgroundColor={color} />
    ));
    return coloredBlocks;
  }
}
