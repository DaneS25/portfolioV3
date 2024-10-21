// App.js

import React from 'react';
import './App.css';
import { AnimationText } from './Components/animationText';
import { NavBar } from './Components/navBar';
import { FooterBar } from './Components/footerBar'; // Import FooterBar
import { AboutMe } from './Components/aboutMe'; // Import AboutMe

function App() {
    return (
        <div className="App">
            <NavBar />
            <AnimationText />
            <AboutMe />
            <FooterBar />
        </div>
    );
}

export default App;
