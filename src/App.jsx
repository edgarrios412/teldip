import ContactUs from "./components/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Datos from "./pages/Datos";
import Servicios from "./pages/Servicios";
import Profile from "./pages/Profile";
import NavBar from "./components/layout/NavBar";

function App() {

  const location = useLocation()
  return (
    <>
      {location.pathname != "/perfil" && <NavBar/>}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/datos/:cedula" element={<Datos />} />

        {/* LOGEADO */}
      </Routes>
    </>
  );
}

export default App;
