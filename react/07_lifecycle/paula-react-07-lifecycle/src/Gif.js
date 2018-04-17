import React from "react";

const Gif = ({ url, searchTerm }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <img src={url} alt={searchTerm} />
    </div>
  );
};

export default Gif;
