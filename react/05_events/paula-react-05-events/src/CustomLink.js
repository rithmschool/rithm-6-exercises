import React from "react";

const CustomLink = ({ href, text, handleClick }) => {
  return (
    <a href={href} onClick={handleClick} target="_blank">
      {text}
    </a>
  );
};

export default CustomLink;
