import React from "react";
import Color from "./Color";
import { Link } from "react-router-dom";

import "./App.css";

const ColorList = ({ colorData }) => (
    <div> 
        {colorData.map((d,i) => 
        <Link to={`/colors/${d.name}`}><Color key={i} {...d}
         /> </Link>)}
    </div>
)

export default ColorList;