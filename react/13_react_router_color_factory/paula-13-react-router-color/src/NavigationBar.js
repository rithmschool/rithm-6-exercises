import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  const nav = (
    <Navbar className="NavigationBar navbar-dark bg-dark">
      <Navbar.Brand>
        <Link to="/colors">
          <img
            src={logo}
            alt="color app logo"
            style={{ width: "60px", height: "40px" }}
          />
          <span>Colorzzz!!!</span>
        </Link>
      </Navbar.Brand>
      <Nav>
        <NavItem>
          <Link to="colors/new">
            <span>Add a new color</span>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
  return nav;
};

export default NavigationBar;
