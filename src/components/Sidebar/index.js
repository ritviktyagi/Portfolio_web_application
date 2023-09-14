import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from "../../assets/images/logo-r10.png";
import LogoSubtitle from '../../assets/images/Ritvik5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact='true' activeClassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeClassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeClassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/ritvik-tyagi-054a47194/'    
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/ritviktyagi'    
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='mailto:rtyagi1019@gmail.com'    
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
  )
}
