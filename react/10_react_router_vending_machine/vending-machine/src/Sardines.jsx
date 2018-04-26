import React from 'react';
import './Sardines.css';
import { Link } from 'react-router-dom';

const Sardines = () => (
    <div className="sardines-comp">
        <div className="sardines-msg">
            <h1>DON'T EAT THE SARDINES! THE SARDINES, THEY EAT YOU!</h1>
            <h1>
                <Link to="/">Go home!</Link>
            </h1>
        </div>
    </div>
)

export default Sardines;