import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends React.Component {
    render() { return (
            <div>
                <link rel="stylesheet" href="App.css" />
                <link rel="stylesheet" href="index.css" />
                <header>
                    <h1><a href="https://fabienthich.github.io">Personal Website</a></h1>
                    <nav>
                        <ul>
                            <li><Link to="Home">Home</Link></li>
                            <li><Link to="Projects">Projects</Link></li>
                            <li><Link>Working...</Link></li>
                            <li><Link to="Internship">Internship Logs</Link></li>
                            <li><Link to="Contact">Contacts</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
    )
    }
}

export default Header;