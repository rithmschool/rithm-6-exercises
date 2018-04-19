import React from 'react';
import { Link } from 'react-router-dom';

const Shark = () => (
  <div>
    <img
      src="https://cdn.images.express.co.uk/img/dynamic/78/590x/Great-White-shark-Evans-Head-595103.jpg"
      alt=""
    />
    <Link to="/">Take me home</Link>
  </div>
);

export default Shark;
