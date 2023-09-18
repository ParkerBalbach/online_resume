import React from 'react'
import RES from '../../images/Parker Balbach Resume.pdf'

const CV = () => {
  return (
    <div className='cv'>
        <a href={RES} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>

    </div>
  )
}

export default CV