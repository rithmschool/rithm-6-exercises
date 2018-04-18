import React from 'react';
import './Sardines.css';
import { Link } from 'react-router-dom';

const Sardines = () => (
    <div className="sardines-comp">
        <div className="message">
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
            <h1>
                <Link to="/">Go home!</Link>
            </h1>
        </div>
    </div>
)

export default Sardines;