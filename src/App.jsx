import ContactUs from "./components/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Datos from "./pages/Datos";
import Servicios from "./pages/Servicios";
import Profile from "./pages/Profile";
import NavBar from "./components/layout/NavBar";
import { useContext, useEffect } from "react";
import axios from "axios"
import { UserContext } from "./utils/context/User/UserContext";
import Politicas from "./pages/Politicas/Politicas";
import QRs from "./pages/QRs";

function App() {

  const location = useLocation()
  const {setUsuario} = useContext(UserContext)

  useEffect(() => {
    if(localStorage.getItem("token")){
      axios.get("/user/token/"+localStorage.getItem("token")).then(({data}) => {
        setUsuario(data)
      })
    }
  },[])

  return (
    <>
      {location.pathname != "/perfil" && <NavBar/>}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/qr/:serial" element={<QRs />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/datos/:cedula" element={<Datos />} />

        {/* LOGEADO */}
      </Routes>
    </>
  );
}

export default App;
