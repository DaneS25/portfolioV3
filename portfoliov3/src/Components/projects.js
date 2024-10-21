import React, { useState } from 'react';
import './projects.css';
import Modal from './modal';
import streetle6 from '../Assets/streetle-6.png';
import streetle7 from '../Assets/streetle-7.png';
import streetle8 from '../Assets/streetle-8.png';
import streetle9 from '../Assets/streetle-9.png';
import poker5 from '../Assets/poker-5.png';
import poker6 from '../Assets/poker-6.png';
import poker7 from '../Assets/poker-7.png';
import poker8 from '../Assets/poker-8.png';
import streetleDemo from '../Assets/streetlevid.mp4';
import pokerDemo from '../Assets/pokervid.mp4';

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = (src) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc('');
  };
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
            <p className='headerText'>Steetle</p>
            <p className='projectText'>
              Streetle is an engaging geography guessing game inspired by popular games like GeoGussr and Wordle. Built with React, it leverages the Google Streetview API to immerse players in real-world locations, challenging them to deduce the location based on visual clues. Each round presents a unique street view, and players must guess where they are on the map, honing their geographic knowledge and spatial awareness while having fun.
              <br />
              <div className="link-button-container">
                <a href="https://streetle-29d87.web.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#BF5700', textDecoration: 'underline' }}>Play Streetle</a>
                <button onClick={() => openModal(streetleDemo)} style={{ cursor: 'pointer', color: '#BF5700', background: 'none', border: 'none', textDecoration: 'underline', padding: '0' }} className='buttonDemo'>Watch Demo</button>
              </div>
            </p>
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
          <div className="project-description poker-description">
              <p className='headerText'>5 Card Poker</p>
              <p className='projectText'>
                5 Card Poker is a multi-player card game developed in React, utilizing Firebase as a robust content management system to seamlessly handle players' cards, game sessions, and the evaluation process. Players are dealt five cards and have a single opportunity to replace any unwanted cards before facing off in a heads-up showdown. This game not only tests players' strategic thinking but also delivers an engaging user experience.
                <br />
                <div className="link-button-container">
                  <a href="https://dane-poker.web.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#BF5700', textDecoration: 'underline' }}>Play 5 Card Poker</a>
                  <button onClick={() => openModal(pokerDemo)} style={{ cursor: 'pointer', color: '#BF5700', background: 'none', border: 'none', textDecoration: 'underline', padding: '0' }} className='buttonDemo'>Watch Demo</button>
                </div>
              </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoSrc={videoSrc} />
    </div>
  );
}
