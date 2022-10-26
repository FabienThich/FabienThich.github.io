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
                <Navbar bg="myBlue" sticky='top' expand="sm" collapseOnSelect>
                    <Navbar.Brand>
                        <img src="favicon_io/favicon.ico" className="icon"/>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className='align'>
                        <Nav>
                            <ul>
                                <li><Link to="/" style={{"textDecoration" : "none", "color" : "black"}}>Home</Link></li>
                                <li><Link to="/projects" style={{"textDecoration" : "none", "color" : "black"}}>Projects</Link></li>
                                <li><Link style={{"textDecoration" : "none", "color" : "black"}}>Working...</Link></li>
                                <li><Link to="/internship" style={{"textDecoration" : "none", "color" : "black"}}>Internship Logs</Link></li>
                                <li><Link to="/contact" style={{"textDecoration" : "none", "color" : "black"}}>Contacts</Link></li>
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