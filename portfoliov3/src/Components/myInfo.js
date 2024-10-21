import React from 'react';
import './myInfo.css'; // Import the CSS file for styling

export function MyInfo() {
    return (
        <div className="info-container">
          <div className="info-item">
            <strong className='email'>Email:</strong> dane.tyler.sorensen@hotmail.com
          </div>
          <div className="info-item">
            <strong className='phone'>Phone:</strong> +64 22 321 7388
          </div>
          <div className="info-item">
            <strong className='age'>Age:</strong> 29
          </div>
        </div>
      );
}


