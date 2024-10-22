// navBar.js

import React from 'react';
import './navBar.css'; // Import the CSS file

export function NavBar() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-me');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <span className="navbar-text">Dane Sorensen.</span> {/* Text on the left */}
                <button className="navbar-button" onClick={scrollToContact}>Contact Me</button> {/* Button on the right */}
            </div>
        </nav>
    );
}
