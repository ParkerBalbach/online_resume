import React from 'react'
import './header.css'
import RES from './CV'

const header = () => {
  return (
    <header>
      <div className="container header__container"></div>
        <h1>Parker Balbach</h1>
        <h5 className="text-light">Software Engineer</h5>
        <RES />
    </header>
  )
}

export default header