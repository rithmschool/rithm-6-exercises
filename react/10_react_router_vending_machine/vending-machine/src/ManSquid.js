import React from 'react';
import { Route, Link } from 'react-router-dom';

const ManSquid = () => (
  <div className="Food">
    <p>Delicious Man Squid</p>
    <img
      src="https://images.sobadsogood.com/dancing-happy-squid-man-will-make-your-day-better/2.jpg"
      alt=""
    />
    <Link to="/">Take him home</Link>
  </div>
);

export default ManSquid;
