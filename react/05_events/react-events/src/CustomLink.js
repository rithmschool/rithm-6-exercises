import React, { Components } from "react";

const CustomLink = ({ href, handleClick, text }) => (
  <div>
    <a
      href={href}
      className={this.props.disabled ? "disabled" : "enabled"}
      target="_blank"
      onClick={handleClick}
    >
      {text}
    </a>
  </div>
);

export default CustomLink;
