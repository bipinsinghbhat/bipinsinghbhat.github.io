import './navbar.css';

import React from 'react'
import data from './data'
import resume from '../../assets/Bipin_Bhat_Resume.pdf'

export const Navbar = () => {
  return (
    <nav id='navbar' className="nav-link.home">
        <div className='container nav__container'>
          <a href="index.html" className='nav__logo'>Bipin Singh Bhat</a>
          <ul id="nav-menu">
            {
              data.map(item => <li key={item.id}><a href={item.link}>{item.title} </a></li>)
            }
            <a href={resume} download target='blank'>Resume</a>
          </ul>
          {/* <button id='theme__icon'> <IoIosColorPalette/> </button> */}
        </div>
    </nav>
  )
}
