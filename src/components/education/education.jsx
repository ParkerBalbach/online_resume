import React from 'react'
import './education.css'
import DIPLOMA from '../../images/My-BSU-Diploma.png'

const education = () => {
  return (
    <section id='education'>
      <h5>Boise State University</h5>
      <h2>Education</h2>
      <div className="container education__container">
        <div className="education__content">
          <div className="education__experience">
            <p>
              During this pivotal period, I played an integral role in a wide spectrum of projects across multiple cross-functional teams.
              This hands-on experience allowed me to actively cultivate and refine the essential skills and competencies vital to a seasoned
              professional in the field of software development. As I navigated through various complex challenges, I demonstrated adaptability,
              problem-solving prowess, and a commitment to delivering high-quality solutions. This rich and diverse exposure has not only enhanced
              my technical acumen but also fortified my collaborative and communicative abilities, making me a well-rounded and resourceful software
              developer ready to excel in demanding professional environments.
            </p>
            <p>
            &#8226; Successfully completed coursework involving Data Structures, Computer Architecture, Operating Systems, Web Development, Data Bases, Mobile Development, and Algorithms
            </p>
            <p>
            &#8226; Played a pivotal role in the creation of an application that tracks and visualizes wildfire data, which is currently used by scientists across the country
              https://fpafod.boisestate.edu/Data
            </p>
            <p>
            &#8226; Successfully optimized the applications performance by over 50%
            </p>
          </div>
        </div>
        <div className="diploma__background">
        <div className="education__diploma-image">
          <img src={DIPLOMA} alt='Diploma' />
        </div>
        </div>
      </div>
    </section>
  )
}

export default education
