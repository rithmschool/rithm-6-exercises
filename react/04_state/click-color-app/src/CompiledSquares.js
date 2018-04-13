import React, { Component } from "react";
import Square from "./Square.js";
import { choice } from "./helpers.js";

class CompiledSquares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: Array.from({ length: 24 }, () => choice(this.props.colors))
    };
  }
  handleClick(idx) {
    this.setState(prevState => {
      let colors = [...prevState.colors];
      colors[idx] = choice(this.props.colors);
      return { colors };
    });
  }
  render() {
    let squares = this.state.colors.map((color, i) => (
      <Square
        key={i}
        color={color}
        handleClick={this.handleClick.bind(this, i)}
      />
    ));

    return (
      <div className="CompiledSquares">
        <div>{squares}</div>;
      </div>
    );
  }
}

CompiledSquares.defaultProps = {
  colors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "CadetBlue",
    "Chartreuse",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGray",
    "DarkGreen",
    "DarkMagenta",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "Gold",
    "GoldenRod",
    "Gray",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "Salmon",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow"
  ]
};

export default CompiledSquares;
