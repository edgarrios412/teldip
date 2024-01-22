import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import VideoCarouselBasicExample from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Datos from './pages/Datos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/datos/:cedula' element={<Datos/>}/>
      </Routes>
    </>
  )
}

export default App
