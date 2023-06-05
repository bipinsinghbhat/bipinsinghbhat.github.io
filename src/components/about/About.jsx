import React from 'react'
import './About.css'
import me from '../../assets/image1.png'
import resume from '../../assets/Bipin_Bhat_Resume.pdf'

export const About = () => {
  return (
    <section id='about'  class="about section">
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
          <button><a href={resume} download  target='_blank' id="resume-button-1">Resume</a></button>
          </div>
          
      </div>
      

    </section>
  )
}
