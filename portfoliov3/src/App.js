// App.js

import React from 'react';
import './App.css';
import { AnimationText } from './Components/animationText';
import { NavBar } from './Components/navBar';
import { FooterBar } from './Components/footerBar'; // Import FooterBar

function App() {
    return (
        <div className="App">
            <NavBar />
            <AnimationText />
            <FooterBar />
        </div>
    );
}

export default App;
