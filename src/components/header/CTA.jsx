import React from 'react'
import resume from '../../assets/Bipin_Bhat_Resume.pdf';
import { Button } from '@chakra-ui/react';

export const CTA = () => {
  return (
    <div class="nav-link resume">
        <div className="cta">
          {/* <button >  <a href={resume} download target='blank'  >Resume</a></button> */}
            

          <a
                
                href={resume}
                download
                target='blank'
              >
                <Button >
                  Resume 
                </Button>
              </a>



            <a href="#contact" className='btn-primary'>Let's connect</a>
        </div>
    </div>
  )
}
