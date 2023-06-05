import React from 'react'
import resume from '../../assets/Bipin_Bhat_Resume.pdf';

export const CTA = () => {
  return (
    <div class="nav-link resume">
        <div className="cta">
          <button id="resume-button-1" >  <a href={resume} download target='blank'>Resume</a></button>
            <a href="#contact" className='btn-primary'>Let's connect</a>
        </div>
    </div>
  )
}
//dhsjd