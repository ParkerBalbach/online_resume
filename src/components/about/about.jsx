import React from 'react'
import './about.css'
import MYPIC from '../../images/placeholder_image.png'

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
          
        </div>
      </div>
    </section>
  )
}

export default about