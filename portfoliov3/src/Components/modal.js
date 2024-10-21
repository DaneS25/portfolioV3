// Modal.js
import React from 'react';
import './modal.css'; // Create a CSS file for styling the modal

const Modal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖️</button>
        <video
          width="560"
          height="315"
          controls
          src={videoSrc}
          title="Demo Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Modal;
