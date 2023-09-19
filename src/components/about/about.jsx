import React from 'react'
import './about.css'
import MYPIC from '../../images/placeholder_image.png'
import {FaBusinessTime} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Career Objective</h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MYPIC} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaBusinessTime className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years In Industry</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about