import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const QRs = () => {
    const [usuario, setUsuario] = useState([])
    const {serial} = useParams()
    useEffect(() => {
        axios.get("/user/qr/"+serial)
        .then(({data}) => setUsuario(data),() => setUsuario(null))
    })
    return(
        <>
        {usuario ?
            <h1>QRs {usuario.name} {usuario.lastname}</h1>
            :
            <h1>Usuario no encontrado</h1>
        }
        </>
    )
}

export default QRs