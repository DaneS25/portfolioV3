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
import shop1 from '../Assets/shop-1.png';
import shop2 from '../Assets/shop-2.png';
import shop3 from '../Assets/shop-3.png';
import shop4 from '../Assets/shop-4.png';
import rsvp1 from '../Assets/rsvp-1.png';
import rsvp2 from '../Assets/rsvp-2.png';
import rsvp3 from '../Assets/rsvp-3.png';
import rsvp4 from '../Assets/rsvp-4.png';
import streetleDemo from '../Assets/streetlevid.mp4';
import pokerDemo from '../Assets/pokervid.mp4';
import shopDemo from '../Assets/shopvid.mp4';
import rsvpDemo from '../Assets/rsvpvid.mp4';

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
            <p className='headerText'>Streetle</p>
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

        <div className="project">
          <div className="slideshow">
            <div className="slideshow-inner">
              <img src={shop1} alt="Project 3 - Slide 1" />
              <img src={shop2} alt="Project 3 - Slide 2" />
              <img src={shop3} alt="Project 3 - Slide 3" />
              <img src={shop4} alt="Project 3 - Slide 4" />
            </div>
          </div>
          <div className="project-description">
            <p className='headerText'>Online Store</p>
            <p className='projectText'>
            The Online Store project is a complete e-commerce platform built with React and Firebase, showcasing a sleek design, product listings, shopping cart functionality, and admin features for managing products (add, edit, remove). It integrates Stripe for secure payments, highlighting my expertise in front-end development, state management, and backend integration. Test the admin account using email: bill@email.com and password: billpass.
              <br />
              <div className="link-button-container">
                <a href="https://shop-project-4b475.web.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#BF5700', textDecoration: 'underline' }}>Visit the Store</a>
                <button onClick={() => openModal(shopDemo)} style={{ cursor: 'pointer', color: '#BF5700', background: 'none', border: 'none', textDecoration: 'underline', padding: '0' }} className='buttonDemo'>Watch Demo</button>
              </div>
            </p>
          </div>
        </div>

        <div className="project">
          <div className="slideshow">
            <div className="slideshow-inner">
              <img src={rsvp1} alt="Project 4 - Slide 1" />
              <img src={rsvp2} alt="Project 4 - Slide 2" />
              <img src={rsvp3} alt="Project 4 - Slide 3" />
              <img src={rsvp4} alt="Project 4 - Slide 4" />
            </div>
          </div>
          <div className="project-description poker-description">
            <p className='headerText'>RSVP App</p>
            <p className='projectText'>
            The RSVP App is a React-based application that allows users to RSVP to events with ease. It features a clean and intuitive user interface, uses EmailJS for email notifications, and includes Google reCAPTCHA to prevent spam submissions. The app also validates user input to ensure accurate and reliable responses. This project demonstrates my abilities in creating user-friendly forms and integrating third-party services for enhanced functionality.
              <br />
              <div className="link-button-container">
                <a href="https://rsvp-ten-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#BF5700', textDecoration: 'underline' }}>Visit RSVP</a>
                <button onClick={() => openModal(rsvpDemo)} style={{ cursor: 'pointer', color: '#BF5700', background: 'none', border: 'none', textDecoration: 'underline', padding: '0' }} className='buttonDemo'>Watch Demo</button>
              </div>
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoSrc={videoSrc} />
    </div>
  );
}
