import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/career">Career</Link>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  )
}

export default Nav;
