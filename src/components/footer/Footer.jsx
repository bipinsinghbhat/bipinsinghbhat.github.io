import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {AiTwotoneMail,AiOutlineGithub} from 'react-icons/ai'


export const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>Bipin Singh Bhat</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#skills">Skills</a> </li>
        <li><a href="#project">Projects</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/bipin-singh-bhat-52a32b192/" target='_blank'><BsLinkedin/> </a>
        <a href="mailto:bipinsinghbhat1698@gmail.com" target='_blank'><AiTwotoneMail/> </a>
        <a href="https://github.com/bipinsinghbhat" target='_blank'><AiOutlineGithub/> </a>
      </div>
    </footer>
  )
}
