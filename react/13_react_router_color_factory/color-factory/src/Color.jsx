import React from 'react';
import { Link } from 'react-router-dom';

const Color = ({ color }) => {
    return (
        <div className="color-show" style={{backgroundColor: color.value}}>
            <h1>THIS IS {color.name.toUpperCase()}</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <h1>
                <Link to="/colors">GO BACK!
                </Link>
            </h1>
        </div>
    )
}

export default Color;