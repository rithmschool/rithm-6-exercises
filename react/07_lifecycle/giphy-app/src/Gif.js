import React from 'react';

const Gif = ({ src, searchTerm }) => (
  <div className="Gif">
    <img src={src} alt={searchTerm} />
  </div>
);

export { Gif };
