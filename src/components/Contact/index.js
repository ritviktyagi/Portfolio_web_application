import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ehiyy1c',
        'template_7t041au',
        refForm.current,
        'DbNMWffaHTRzonVnn'
      )
      .then(
        (result) => {
          alert("Message successfully sent!")
          console.log(result, "form")
          window.location.reload(false)
        },
        (error) => {
          console.log(error, "formerror")
          alert("Failed to send the message, please try again")
        }
      )
  }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                  If you have any request or question, don't hesitate to contact me 
                  using below form.
                </p>
                <div className='contact-form'>
                  <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                      <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                      </li>
                      <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                      </li>
                      <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                      </li>
                      <li>
                        <textarea
                          placeholder='Message'
                          name='message'
                          required
                        ></textarea>
                      </li>
                      <li>
                        <input type="submit" className='flat-button' value="SEND" />
                      </li>
                    </ul>
                  </form>
                </div>
            </div>
            <div className='info-map'>
              Ritvik Tyagi,
              <br />
              India,
              <br />
              Moradabad <br />
              <span>rtyagi1019@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[28.8389, 78.7768]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[28.8389, 78.7768]}>
                  <Popup>Ritvik lives here in Moradabad, India!</Popup>
                </Marker>
            </MapContainer>

            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}