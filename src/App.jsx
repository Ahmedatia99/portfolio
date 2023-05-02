import React from 'react'
import './assets/styles/main.css'
import Landing from './components/atoms/info/Landing'
import Script from './components/Script'
import Experience from './components/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main>
      <Landing />
      <Script />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
