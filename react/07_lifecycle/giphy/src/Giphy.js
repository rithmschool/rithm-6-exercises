import React from 'react';

const Giphy = ({ url }) => (
  <div className="mx-3 my-auto img-div">
    <img src={url} alt="A lovely giphy" className="m-1 gif-img" />
  </div>
);

export default Giphy;
