import React from 'react';

const Caption = ({ headCount, tailCount }) => (
    <p>Out of {headCount + tailCount} flips, there have been {headCount} heads and {tailCount} tails!</p>
)

export default Caption;