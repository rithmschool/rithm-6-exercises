import React from "react";
import './App.css';

const Gif = ({url}) => {
    return (
        <div>
            <img src={url} alt={"gif"} />
        </div>
    )
}

export default Gif;