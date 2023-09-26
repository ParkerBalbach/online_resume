import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>parkerbalbach@gmail.com</h5>
            <a href='mailto:parkerbalbach@gmail.com' target='_blank' rel='noreferrer'>Message Me</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone=12086315383' target='_blank' rel='noreferrer'>Message Me</a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form action=''></form>
      </div>
    </section>
  )
}

export default contact