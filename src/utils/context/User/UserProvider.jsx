import { useState } from "react";
import { UserContext } from "./UserContext"
// import { useUsuarios } from "../hooks/useUsuarios";

export const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})
    
    return (
        <UserContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UserContext.Provider>
    )
}