import React from 'react';
import './contactMe.css';

export function ContactMe() {
  return (
    <div id="contact-me" className="contact-container">
      <h2 className="contact-header">Contact Me</h2>
      <p className="contact-info">
        Feel free to contact me anytime via email or phone.
        <br />
        Email: <a href="mailto:dane.tyler.sorensen@hotmail.com">dane.tyler.sorensen@hotmail.com</a>
        <span className="separator"></span>
        Phone: +64 22 321 7388
      </p>
    </div>
  );
}
