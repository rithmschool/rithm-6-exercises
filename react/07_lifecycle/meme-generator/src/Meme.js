import React from 'react';

const Meme = ({ src }) => (
  <div>
    <img
      src={src}
      alt=""
      style={{
        width: '400px',
        padding: '5px'
        // height: '300px'
      }}
    />
  </div>
);

export default Meme;
