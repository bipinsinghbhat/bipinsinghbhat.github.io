import React from 'react'
import resume from '../../assets/Bipin-Bhat-Resume.pdf';
import { Button } from '@chakra-ui/react';

export const CTA = () => {
  return (
    <div class="nav-link resume">
        <div className="cta">
          {/* <button >  <a href={resume} download target='blank'  >Resume</a></button> */}
            

          <Button
          
           
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1FTmwjzh-qF77twpLmWU9W0d0jXu2tYKI/view?usp=sharing",
                "_blank"
              );
            }}
          >


      <a href={resume}
    
        download
        target="_blank"
      >
       
          Resume
       </a>
       </Button>



            <a href="#contact" className='btn-primary'>Let's connect</a>
        </div>
    </div>
  )
}
