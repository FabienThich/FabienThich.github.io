import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Home from '../Home/home';
import Projects from '../Projects/projects';
import Internship from '../Internship/internship';
import Contact from '../Contact/contact';

class Header extends React.Component {
    render() { return (
            <div>
                <link rel="stylesheet" href="App.css" />
                <link rel="stylesheet" href="index.css" />
                <header>
                    <h1><a href="https://fabienthich.github.io">Personal Website</a></h1>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link>Working...</Link></li>
                            <li><Link to="/internship">Internship Logs</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
    )
    }
}

export default Header;