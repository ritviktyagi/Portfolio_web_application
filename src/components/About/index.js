import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>I'm a passionate and results-driven frontend developer with one year of experience in building dynamic web applications using React.js. My journey in web development began with a fascination for creating interactive and user-friendly digital experiences, and I've been dedicated to honing my skills ever since.</p>
            <p> In addition to React, I'm well-versed in HTML5, CSS3, JavaScript (ES6+), and related frontend technologies. I take pride in writing clean, efficient, and maintainable code.</p>
            <p>The tech industry is ever-evolving, and I'm committed to staying up-to-date with the latest frontend trends and best practices. I eagerly embrace new challenges and technologies.</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faJsSquare} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGitAlt} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faBootstrap} color='#EC4D28' />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}
