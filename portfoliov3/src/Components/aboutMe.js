// aboutMe.js

import React from 'react';
import './aboutMe.css'; // Import the CSS file
import meow from '../Assets/meow.jpg'; // Adjust the path to your image

export function AboutMe() {
    return (
        <section className="about-me-section">
            <div className="about-me-container">
                <img src={meow} alt="Dane Sorensen" className="about-me-image" />
                <div className="about-me-text">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm Dane Sorensen, a passionate IT professional from Dunedin. I recently graduated with a Bachelor of Information Technology and have been working in IT support. 
                        My interests include web development, penetration testing, and cyber security. I enjoy taking on new challenges and continuously improving my skills.
                    </p>
                </div>
            </div>
        </section>
    );
}
