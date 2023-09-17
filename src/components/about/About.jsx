import React from 'react'
import './About.css'
import me from '../../assets/image1.png'
import resume from '../../assets/Bipin_Bhat_Resume.pdf'
import { Button } from '@chakra-ui/react'

export const About = () => {
  return (
    <section id='about'  className="about section">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt="about" /> 
          </div>
         
        </div>
        <p className='about__content' id="user-detail-intro"> 
        A strong knowledge of frontend development, including creating and managing user interfaces using HTML, CSS, and JavaScript, as well as working with popular front-end framework like React, also having acquired skills in Data Structure and Algorithm.
          <br />
          <br />
          <br />
          
          </p>
          <div className='connect'>
          <a href="#contact" className='btn btn-primary'>Let's connect</a>
          {/* <button id="resume-button-2"><a href={resume} download  target='blank' id="resume-link-2">Resume</a></button> */}

          {/* <a
                id="resume-link-2"
                href={resume}
                download
                target='blank'
              >
                <Button id="resume-button-2">
                  Resume 
                </Button>
              </a> */}


        <Button
            id="resume-button-2"
           
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1FTmwjzh-qF77twpLmWU9W0d0jXu2tYKI/view?usp=sharing",
                "_blank"
              );
            }}
          >


      <a href={resume}
      id="resume-link-2"
        download
        target="_blank"
      >
       
          Resume
       </a>
       </Button>


          </div>
          
      </div>
      

    </section>
  )
}
