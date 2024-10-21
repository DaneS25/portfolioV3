// animationText.js

import { TypeAnimation } from 'react-type-animation';
import './animationText.css';

export function AnimationText() {
    return (
        <section className='heroSection'>
            <div className='container'>
                <div className='wrapper'>
                    <span>Dane</span>
                    <span>Sorensen</span>
                </div>
                <div className='animation'>
                    <TypeAnimation
                        sequence={[
                            'A Graduate in Information Technology.',
                            1000,
                            'Web developer.',
                            1000,
                            'Penetration tester.',
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '24px', color: '#E3D9B6', display: 'inline-block' }}
                    />
                </div>
            </div>
        </section>
    );
}
