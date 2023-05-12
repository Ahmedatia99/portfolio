import React, { useEffect } from 'react'
import './assets/styles/main.css'
import Landing from './components/atoms/info/Landing'
import Script from './components/Script'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Exper from './components/Exper'
import Footer from "./components/footer/Footer"
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
      <Projects />
      <Exper />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
