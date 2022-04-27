import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="nav-link js-scroll active" href="#home">
          Home
        </a>

        <a className="nav-link js-scroll" href="#about">
          About
        </a>

        <a className="nav-link js-scroll" href="#skills">
          Skills
        </a>

        <a className="nav-link js-scroll" href="#projects">
          Projects
        </a>

        <a className="nav-link js-scroll" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
