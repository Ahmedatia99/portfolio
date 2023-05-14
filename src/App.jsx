import React, { useEffect } from 'react'
import './assets/styles/main.css'
import Landing from './components/atoms/info/Landing'
import Script from './components/Script'
import Projects from './components/projects/Projects'
import Exper from './components/Exper'
import Footer from './components/footer/Footer'
import Works from './components/workspace/Works'
import 'aos/dist/aos.css'

import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div>
      <Landing />
      <Script />
      <Exper />
      <Projects />
      <Footer />
      <Works />
    </div>
  )
}

export default App
