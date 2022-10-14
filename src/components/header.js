import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';

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
                            <li><Link>Contact Info</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
    )
    }
}

export default Header;