import React from "react";
import { Link, Redirect } from "react-router-dom";

const ColorPage = ({ colorData, match, history }) => {
    let foundColor = colorData.find( data => {
        return data.name === match.params.color;
    })
    if (!foundColor) {
        return <Redirect to="/colors" />
    }
    return (
        <div>
            <Link to="/colors"> Go back to all colors </Link>
            <div style={{backgroundColor: foundColor.value, height:"100rem", width:"100rem"}}> sup </div>
        </div>
    )
}

export default ColorPage;