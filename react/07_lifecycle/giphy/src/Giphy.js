import React from 'react';

export default const Giphy = ({ url }) => (
  <div className="mx-3 my-auto img-div">
    <img src={url} alt="A lovely giphy" className="m-1 gif-img" />
  </div>
);
