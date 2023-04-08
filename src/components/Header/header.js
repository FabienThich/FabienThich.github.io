import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="App.css" />
        <link rel="stylesheet" href="index.css" />
        <Navbar className="myBlue" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <a href="https://fabienthich.github.io/">
              <img src="favicon_io/favicon.ico" className="icon" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="align navbar-toggle-icon">
            <Nav>
              <ul>
                <li>
                  <NavLink to="/home" className="navlink">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="navlink">
                    Projects
                  </NavLink>
                </li>
                {/*<li><Link className='navlink'>Working...</Link></li>*/}
                <li>
                  <NavLink to="/internship" className="navlink">
                    Internship Logs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education" className="navlink">
                    Education
                  </NavLink>
                </li>
                {/*<li><NavLink to="/contact" className='navlink'>Contacts</Link></li>8*/}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
