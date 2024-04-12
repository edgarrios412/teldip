import { Button } from "@/components/ui/button";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    BookText,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "@/utils/context/User/UserContext";
import axios from "axios";
import SIGC from "./Documentos/SIGC";

const Politicas = () => {
    const { usuario } = useContext(UserContext);
    const [page, setPage] = useState(1);
    const [sizePanel, setSizePanel] = useState(null);
    const [caducado, setCaducado] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("/user/token/" + token).then(
                () => { },
                (e) => caducarSesion(e)
            );
        } else return caducarSesion();
    }, []);

    const caducarSesion = () => {
        setCaducado(true);
    };

    return (
        <div className="h-[90vh] w-[100%]">
            <ResizablePanelGroup
                direction="horizontal"
                className="h-full rounded-lg border"
            >
                <ResizablePanel
                    defaultSize={20}
                >
                    <div className="flex-row h-full max-w-96 p-2">
                            
                        <Button
                            onClick={() => setPage(1)}
                            className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${page == 1 ? "bg-green-200" : "bg-transparent"
                                }`}
                        >
                            <BookText
                                className="mr-4 h-4 w-4"
                            />
                            Sistema integrado de gestion de calidad
                        </Button>
                        <Button
                            onClick={() => setPage(2)}
                            className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${page == 2 ? "bg-green-200" : "bg-transparent"
                                }`}
                        >
                            <BookText
                                className="mr-4 h-4 w-4"
                            />
                            Otro documento
                        </Button>
                    </div>
                </ResizablePanel>
                <ResizablePanel defaultSize={80} className="!overflow-y-auto bg-gray-100">
                    {page == 1 && <SIGC/>}
                    {page == 2 && <h1>Otro documento</h1>}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default Politicas;
