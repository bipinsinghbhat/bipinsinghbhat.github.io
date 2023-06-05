import React from 'react'
import './contact.css';
import {GrMail} from 'react-icons/gr'
import {FaWhatsappSquare} from 'react-icons/fa'
import  { useRef } from 'react';


export const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container contact_container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <GrMail className='icons'/>
          <h4>Email</h4>
          <h5>bipinsinghbhat1698@gmail.com</h5>
          <a href="mailto:bipinsinghbhat1698@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact-option'>
            <FaWhatsappSquare className='icons'/>
          <h4>WhatsApp</h4>
          <h5 id="contact-phone">+91 6398829280</h5>
          <a href="https://api.whatsapp.com/send?phone=6398829280" target='_blank'>Send a message</a>
          </article>


        </div>
        <form >
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your message here' required></textarea>
          <button type='submit' name='message' value="send" className='btn-primary'>Send Message</button>
          
        </form>
        
      </div>
    </section>
  )
}
