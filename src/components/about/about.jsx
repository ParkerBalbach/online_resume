import React from 'react'
import './about.css'
import MYPIC from '../../images/placeholder_image.png'
import {FaBusinessTime} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'
import {FaTools} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <h2>Career Objective</h2>
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
              <small>6+ Years</small>
            </article>
            <article className='about__card'>
              <MdLanguage className='about__icon'/>
              <h5>Languages</h5>
              <small>10+</small>
            </article>
            <article className='about__card'>
              <FaTools className='about__icon'/>
              <h5>Tools</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
          Recent Computer Science graduate with over a year of hands-on experience building and testing applications using multiple tools and programming languages. 
          Experienced with several programming languages (Python, React, Java, JavaScript, CSS, HTML, PHP, Kotlin, C, C#, C++, and SQL). Experienced with working in 
          an agile team environment; as well as using a test driven development process. Worked with/as all roles in a Scrum system. Have worked with several different 
          tools and frameworks(MySQL, Git, AWS, Firebase, Maven, Spring Boot, Docker, Apache Spark, and Jira) Seeking to use my development experience in an entry-level position.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Information</a> 
        </div>
      </div>
    </section>
  )
}

export default about