import React from 'react';

const Div = ({ width, height, backgroundColor }) => (
    <div style={{
        width,
        height,
        backgroundColor,
    }} className="square mx-2" ></div>
)

export default Div;