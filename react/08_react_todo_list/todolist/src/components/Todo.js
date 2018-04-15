import React, { Component } from "react";

const Todo = ({ name, desc }) => (
  <div>
    <h1>{name}</h1>
    <h2>{desc}</h2>
  </div>
);

export default Todo;
