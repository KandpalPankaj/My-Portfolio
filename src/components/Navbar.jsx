import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="fixed-top" id="mainNav">
      <div className="container">
        <div className="left">
          <div style={{width: "13%", height:"100%"}}>
          <a className="nav-link js-scroll active" href="#home">
            Home
          </a>
          </div>
        </div>
        <div className="flex">
        <div>
          <a className="nav-link js-scroll" href="#about">
            About
          </a>
        </div>

        <div>
          <a className="nav-link js-scroll" href="#skills">
            Skills
          </a>
        </div>

        <div>
          <a className="nav-link js-scroll" href="#projects">
            Projects
          </a>
        </div>

        <div>
          <a className="nav-link js-scroll" href="#contact">
            Contact
          </a>
        </div>
        <div>
          <a className="nav-link js-scroll" href="https://drive.google.com/file/d/13XxXth3xQ1CiSanp5fOPJEldiCxzZi_E/view?usp=sharing">Resume</a>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
