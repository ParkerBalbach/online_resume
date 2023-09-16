import React from 'react'
import Header from './components/header/header'
import About from './components/about/about'
import Workhistory from './components/workhistory/workhistory'
import Education from './components/education/education.jsx'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const app = () => {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Workhistory />
      <Contact />
      <Footer />
    
    </>
  )
}

export default app