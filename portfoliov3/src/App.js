// App.js

import React from 'react';
import './App.css';
import { AnimationText } from './Components/animationText';
import { NavBar } from './Components/navBar';
import { FooterBar } from './Components/footerBar'; // Import FooterBar
import { AboutMe } from './Components/aboutMe'; // Import AboutMe
import { MyInfo } from './Components/myInfo'; // Import MyInfo
import { Projects } from './Components/projects'; // Import Projects
import { ContactMe } from './Components/contactMe';

function App() {
    return (
        <div className="App">
            <NavBar />
            <AnimationText />
            <AboutMe />
            <MyInfo />
            <Projects />
            <ContactMe />
            <FooterBar />
        </div>
    );
}

export default App;
