import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

const Datos = () => {
    const {cedula} = useParams()
    return (
        <>
        <NavBar/>
            <h1>{cedula}</h1>
        </>
    )
}

export default Datos