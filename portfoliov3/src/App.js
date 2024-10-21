// App.js

import React from 'react';
import './App.css';
import { AnimationText } from './Components/animationText';
import { NavBar } from './Components/navBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <AnimationText />
        </div>
    );
}

export default App;
