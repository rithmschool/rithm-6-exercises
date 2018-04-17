import React from 'react';
import { Route, Link } from 'react-router-dom';

const Fish = () => (
  <div className="Food">
    <p>Delicious Fish</p>
    <img
      src="https://www.seriouseats.com/images/2016/05/20150715-menu-salmon-a-la-nage-vicky-wasik-10.jpg"
      alt=""
    />
    <Link to="/">Take me home</Link>
  </div>
);

export default Fish;
