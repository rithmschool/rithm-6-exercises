import React, { Component } from "react";

const CustomLink = ({ text, href, handleLinkClick }) => (
  <div>
    <br />
    <a href={href} onClick={handleLinkClick} target="_blank">
      {text}
    </a>
  </div>
);

export default CustomLink;
