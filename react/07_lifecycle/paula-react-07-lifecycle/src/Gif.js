import React from "react";

const Gif = ({ src, searchTerm }) => {
  return (
    <div>
      <img src={src} alt={searchTerm} />
      <p>{searchTerm}</p>
    </div>
  );
};

export default Gif;
