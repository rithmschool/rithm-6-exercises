import React from 'react';
import { Route, Link } from 'react-router-dom';

const Squid = () => (
  <div className="Food">
    <p>Delicious Squid</p>
    <img
      src="https://i.pinimg.com/originals/35/88/a2/3588a2e6109943ca59ef9f6690a2d8e0.jpg"
      alt=""
    />
    <Link to="/">Take me home</Link>
  </div>
);

export default Squid;
