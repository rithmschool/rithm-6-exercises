import React from "react";

const CustomLink = ({ text, href, handleLinkClick }) => {
  return (
    <div>
      <p>
        <a href={href} onClick={handleLinkClick} target="_blank">
          {text}
        </a>
      </p>
    </div>
  );
};

export default CustomLink;
