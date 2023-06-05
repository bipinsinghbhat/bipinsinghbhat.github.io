import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'

export const HeaderSocial = () => {
  return (
    <div>
        <div className="header__social">
            <a href="https://www.linkedin.com/in/bipin-singh-bhat-52a32b192/" target='blank' id="contact-linkedin"><BsLinkedin/></a>
            <a href="https://github.com/bipinsinghbhat" target='blank' id="contact-github"> <BsGithub/> </a>
            <a href="mailto:bipinsinghbhat1698@gmail.com" target='blank' id="contact-email"> <CgMail/> </a>
        </div>
    </div>
  )
}
