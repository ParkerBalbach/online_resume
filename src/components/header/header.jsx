import React from 'react'
import './header.css'
import RES from './CV'
import PLACE from '../../images/placeholder_image.png'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Parker Balbach</h1>
        <h4 className="text-light">Software Engineer</h4>
        <RES />
        <div className='mypic'>
          {/* Change this to my picture in the future */}
          <img src={PLACE} alt='place' />
        </div>
      </div>
    </header>
  )
}

export default header