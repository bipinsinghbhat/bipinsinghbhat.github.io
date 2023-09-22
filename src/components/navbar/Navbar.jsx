import './navbar.css';

import React, { useState } from 'react'

import resume from '../../assets/Bipin-Bhat-Resume.pdf'



import { HiHome } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import {ImFolderDownload} from 'react-icons/im'
import { Button } from '@chakra-ui/react';






export const Navbar = () => {
 

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="nav-menu">
     
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        class="nav-link home"
      >
      
        
        Home
          
      </a>
      
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        class="nav-link about"
      >
      
        About
      </a>

       <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        class="nav-link skills"
      >
      
        Skills
      </a>
     
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
        class="nav-link projects"
      >
      
        Projects
      </a>

      
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        class="nav-link contact"
      >
      
        Contact
      </a>

      <Button
            id="resume-button-1"
            className="nav-link resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1FTmwjzh-qF77twpLmWU9W0d0jXu2tYKI/view?usp=sharing",
                "_blank"
              );
            }}
          >


      <a href={resume}
      id="resume-link-1"
        download
        target="_blank"
      >
       
        <ImFolderDownload/> 
       </a>
       </Button>
     
    </nav>
  );





}
