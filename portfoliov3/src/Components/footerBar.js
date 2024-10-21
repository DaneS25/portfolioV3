// footerBar.js

import React from 'react';
import './footerBar.css'; // Import the CSS file

export function FooterBar() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-text-left">© 2024 Dane Sorensen</span> {/* Text on the left */}
                <span className="footer-text-right">Made with ❤️ in Kapiti</span> {/* Text on the right */}
            </div>
        </footer>
    );
}
