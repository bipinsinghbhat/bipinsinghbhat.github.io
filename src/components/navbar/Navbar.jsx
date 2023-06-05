import './navbar.css';

import React, { useState } from 'react'
import data from './data'
import resume from '../../assets/Bipin_Bhat_Resume.pdf'



import { HiHome } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import {ImFolderDownload} from 'react-icons/im'




export const Navbar = () => {
  // return (
  //   <nav id='navbar' className="nav-link.home">
  //       <div className='container nav__container'>
  //         <a href="index.html" className='nav__logo'>Bipin Singh Bhat</a>
  //         <ul id="nav-menu">
  //           {
  //             data.map(item => <li key={item.id}><a href={item.link}>{item.title} </a></li>)
  //           }
  //           <a href={resume} download target='blank'>Resume</a>
  //         </ul>
  //         {/* <button id='theme__icon'> <IoIosColorPalette/> </button> */}
  //       </div>
  //   </nav>
  // )

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="nav-menu">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        class="nav-link home"
      >
      
        
        <HiHome />
          
      </a>
      
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        class="nav-link about"
      >
      
        <MdContactPage />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        class="nav-link skills"
      >
      
        <SiBookstack />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
        class="nav-link projects"
      >
      
        <BsStack />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        class="nav-link contact"
      >
      
        <RiMessage2Fill />
      </a>

      <a href={resume}
        download
        target="_blank"
      >
       
        <ImFolderDownload/> 
       </a> 
     
    </nav>
  );





}
