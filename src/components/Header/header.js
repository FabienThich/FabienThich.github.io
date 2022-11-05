import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

class Header extends React.Component {
    render() { return (
            <div>
                <link rel="stylesheet" href="App.css" />
                <link rel="stylesheet" href="index.css" />
                <Navbar className="myBlue" sticky='top' expand="sm" collapseOnSelect>
                    <Navbar.Brand>
                        <a href="https://fabienthich.github.io/"><img src="favicon_io/favicon.ico" className="icon"/></a>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className='align navbar-toggle-icon'>
                        <Nav>
                            <ul>
                                <li><Link to="/" className='navlink'>Home</Link></li>
                                <li><Link to="/projects" className='navlink'>Projects</Link></li>
                                <li><Link className='navlink'>Working...</Link></li>
                                <li><Link to="/internship" className='navlink'>Internship Logs</Link></li>
                                <li><Link to="/education" className='navlink'>MyEdu</Link></li>
                                {/*<li><Link to="/contact" className='navlink'>Contacts</Link></li>8*/}
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>      
                
                {/*<header>
                    <h1><a href="https://fabienthich.github.io"><img src='favicon_io/favicon.ico' className='icon'></img></a></h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link>Working...</Link></li>
                            <li><Link to="/internship">Internship Logs</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>
                        </ul>
                    </nav>
                </header>*/}
            </div>
    )
    }
}

export default Header;