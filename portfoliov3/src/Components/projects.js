import React from 'react';
import './projects.css';
import streetle6 from '../Assets/streetle-6.png';
import streetle7 from '../Assets/streetle-7.png';
import streetle8 from '../Assets/streetle-8.png';
import streetle9 from '../Assets/streetle-9.png';
import poker5 from '../Assets/poker-5.png';
import poker6 from '../Assets/poker-6.png';
import poker7 from '../Assets/poker-7.png';
import poker8 from '../Assets/poker-8.png';

export function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-content">
        <div className="project">
          <div className="slideshow">
            <div className="slideshow-inner">
              <img src={streetle6} alt="Project 1 - Slide 6" />
              <img src={streetle7} alt="Project 1 - Slide 7" />
              <img src={streetle8} alt="Project 1 - Slide 8" />
              <img src={streetle9} alt="Project 1 - Slide 9" />
            </div>
          </div>
          <div className="project-description">
            <p>Project 1: This is a brief explanation of the project.</p>
          </div>
        </div>

        <div className="project">
          <div className="slideshow">
            <div className="slideshow-inner">
              <img src={poker5} alt="Project 2 - Slide 1" />
              <img src={poker6} alt="Project 2 - Slide 2" />
              <img src={poker7} alt="Project 2 - Slide 3" />
              <img src={poker8} alt="Project 2 - Slide 4" />
            </div>
          </div>
          <div className="project-description">
            <p>Project 2: This is a brief explanation of the project.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
