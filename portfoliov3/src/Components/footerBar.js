// footerBar.js

import React from 'react';
import './footerBar.css'; // Import the CSS file
import githubLogo from '../Assets/gitcat.svg';

export function FooterBar() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-text-left">© 2024 Dane Sorensen</span> {/* Text on the left */}
                <a href="https://github.com/DaneS25" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                </a>
            </div>
        </footer>
    );
}
