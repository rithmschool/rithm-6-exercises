import React, { Components } from "react";
import "./CustomLink.css";

const CustomLink = ({ href, handleClick, text, disabled }) => (
  <div>
    <a
      href={href}
      className={disabled ? "notActive" : ""}
      target="_blank"
      onClick={handleClick}
    >
      {text}
    </a>
  </div>
);

export default CustomLink;
