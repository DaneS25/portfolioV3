// App.js

import React from 'react';
import './App.css';
import { AnimationText } from './Components/animationText';
import { NavBar } from './Components/navBar';
import { FooterBar } from './Components/footerBar'; // Import FooterBar
import { AboutMe } from './Components/aboutMe'; // Import AboutMe
import { MyInfo } from './Components/myInfo'; // Import MyInfo

function App() {
    return (
        <div className="App">
            <NavBar />
            <AnimationText />
            <AboutMe />
            <MyInfo />
            <FooterBar />
        </div>
    );
}

export default App;
