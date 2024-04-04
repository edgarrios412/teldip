import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import NavBar from './components/NavBar'
import ContactUs from './components/ContactUs'
// import Footer from './components/Footer'
import VideoCarouselBasicExample from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Datos from './pages/Datos'
import Servicios from './pages/Servicios'
import Profile from './pages/Profile'

function App() {

  // useEffect(() => {
  //   const root = window.document.documentElement
  //   root.classList.add("dark")
  // }, [])

  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/servicios' element={<Servicios/>}/>
      <Route path='/contacto' element={<ContactUs/>}/>
      <Route path='/perfil' element={<Profile/>}/>
      <Route path='/datos/:cedula' element={<Datos/>}/>

      {/* LOGEADO */}
      </Routes>
    </>
  )
}

export default App
