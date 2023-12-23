import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import VideoCarouselBasicExample from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/* <VideoCarouselBasicExample/> */}
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
