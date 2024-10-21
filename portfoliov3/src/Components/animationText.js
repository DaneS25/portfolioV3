// animationText.js

import { TypeAnimation } from 'react-type-animation';
import './animationText.css';

export function AnimationText() {
    return (
        <section className='heroSection'>
            <div className='container'>
                <div className='wrapper'>
                    <span className='dane'>Dane</span>
                    <span className='sorensen'>Sorensen</span>
                </div>
                <div className='animation'>
                <TypeAnimation
                    sequence={[
                        'Degree holder in Information Technology.',
                        1000,
                        'Passionate about Web Development.',
                        1000,
                        'Passionate about Cybersecurity.',
                        1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '14px', color: '#E3D9B6', display: 'inline-block' }}
                />
                </div>
            </div>
        </section>
    );
}
