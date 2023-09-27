import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__name'>Parker Balbach</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href='#workhistory'>Work Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="www.linkedin.com/in/parker-balbach"><GrLinkedin /></a>
        <a href="https://github.com/ParkerBalbach"><AiOutlineGithub /></a>
        <a href='mailto:parkerbalbach@gmail.com' target='_blank' rel='noreferrer'><SiGmail /></a>
      </div>
    </footer>
  )
}

export default footer