import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Educations from './components/Educations'
import Footer from './components/Footer'



const App = () => {
  
 
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Educations/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
