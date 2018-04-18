import React from 'react';
import './Soda.css';
import { Link } from 'react-router-dom';

const Soda = () => (
    <div className="soda-comp">
        <div className="soda-msg">
            <h1>OMG SUGARRRR</h1>
            <h1>
                <Link to="/">Go home!</Link>
            </h1>
        </div>
    </div>
)

export default Soda;