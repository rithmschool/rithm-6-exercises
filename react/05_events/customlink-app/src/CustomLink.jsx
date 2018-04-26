import React from 'react';

const CustomLink = ({ href, text, handleClick }) => (
    <a href={href} onClick={handleClick} target="_blank" className="custom-link m-2">{text}</a>
)

export default CustomLink;