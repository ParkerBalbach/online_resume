import React from 'react'
import './workhistory.css'
import {  BsPatchCheckFill } from 'react-icons/bs'
import { TbBrandPushbullet } from 'react-icons/tb'

const workhistory = () => (
  <section id='workhistory'>
    <h5>Skills I've Gained</h5>
    <h2>My Work Experience</h2>

    <div className="container experience__container">
      {/* Front-End */}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
      {/* Back-END */}
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Docker</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className='experience__paragraphs'>
        <h3>Idaho Department Of Transportation Intern</h3>
      <p>
      While being a data analytics intern I played a major role in the development of a tool that is used to predict whether or not a road needs to be shut down during short periods 
      of the spring months to prevent costly damage. I also gained experience in developing solutions to problems through data analysis and communicating my findings to stakeholders 
      clearly and concisely.
      </p>
      <div className='experience__bullets-indenting'>
      <div className="experience__bullets-format">
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Actively participated in refining the tool in order to get the most accurate results possible  
      </p>
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Created a visual interface for the tool that allowed anyone to easily interpret the data  
      </p>
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Developed a solution that allowed the tool to be automatically updated, rather than manually updated daily  
      </p>
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Began development to increase the scope of the project using AI  
      </p>
      </div>
      </div>
      </div>
      <div className='experience__paragraphs'>
        <h3>Boise State University Software Developer Intern</h3>
      <p>
      During this pivotal period, I played an integral role in a wide spectrum of projects across multiple cross-functional teams. This hands-on experience allowed me to actively 
      cultivate and refine the essential skills and competencies vital to a seasoned professional in the field of software development. As I navigated through various complex 
      challenges, I demonstrated adaptability, problem-solving prowess, and a commitment to delivering high-quality solutions. This rich and diverse exposure has not only enhanced 
      my technical acumen but also fortified my collaborative and communicative abilities, making me a well-rounded and resourceful software developer ready to excel in a demanding 
      professional environment.

      </p>
      <div className='experience__bullets-indenting'>
      <div className="experience__bullets-format">
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Played a pivotal role in the creation of an application that tracks and visualizes wildfire data, which is currently used 
      by scientists across the country https://fpafod.boisestate.edu/Data
      </p>
      <p>
      <TbBrandPushbullet className='experience__bullets'/> Successfully optimized the applications performance by over 50%  
      </p>
      </div>
      </div>
      </div>
    </div>
  </section>
)

export default workhistory