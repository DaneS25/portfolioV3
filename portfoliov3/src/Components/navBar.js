import React from 'react';
import './navBar.css'; // Import the CSS file

export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <span className="navbar-text">Dane Sorensen.</span> {/* Text on the left */}
                <button className="navbar-button">Contact Me</button> {/* Button on the right */}
            </div>
        </nav>
    );
}
