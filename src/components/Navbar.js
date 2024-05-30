import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main menu">
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/about">Bio</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
