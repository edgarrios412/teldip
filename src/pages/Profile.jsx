import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  CreditCard,
  FileCode,
  HeartHandshake,
  LayoutList,
  LogOut,
  Mail,
  Settings,
  User,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import Perfil from "./Profile/Perfil";
import Pagos from "./Profile/Pagos";
import Servicios from "./Profile/Servicios";
import Documentacion from "./Profile/Documentacion";
import Soporte from "./Profile/Soporte";
import Ajustes from "./Profile/Ajustes";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Profile = () => {
  const [page, setPage] = useState(1);
  const [sizePanel, setSizePanel] = useState(null);
  return (
    <div className="h-[100vh] w-[100%]">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full rounded-lg border"
      >
        <ResizablePanel
          onResize={(e) => {
            setSizePanel(e);
            console.log(e);
          }}
          defaultSize={20}
          maxSize={20}
          minSize={6}
        >
          <div className="flex-row h-full max-w-96 p-2">
            {sizePanel > 14 ? (
              <div className="mb-2 p-5 justify-start">
                <h2 className="font-[OpenSans] text-xl">
                  Hola <b>Edgar!</b>
                </h2>
                <span className="font-[OpenSans] text-xs text-gray-400">
                  Ultima conexión: 05/03/24 06:15
                </span>
              </div>
            ) : (
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <User
                    className={`${sizePanel < 14 ? "m-auto my-12" : "mr-auto"}`}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <div className="p-5 justify-start">
                    <h2 className="font-[OpenSans] text-xl">
                      Hola <b>Edgar!</b>
                    </h2>
                    <span className="font-[OpenSans] text-xs text-gray-400">
                      Ultima conexión: 05/03/24 06:15
                    </span>
                  </div>
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            )}
            <DropdownMenuSeparator />
            <Button
              onClick={() => setPage(1)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 1 ? "bg-green-200" : "bg-transparent"
              }`}
            >
              {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <User className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`} />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Perfil</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <User className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`} />
              )}
              {sizePanel > 14 && "Perfil"}
            </Button>
            <Button
              onClick={() => setPage(2)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 2 ? "bg-green-200" : "bg-transparent"
              }`}
            >
            
              {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <CreditCard
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Pagos</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <CreditCard
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
              )}
              {sizePanel > 14 && "Pagos"}
            </Button>
            <Button
              onClick={() => setPage(3)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 3 ? "bg-green-200" : "bg-transparent"
              }`}
            >
              
              {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <LayoutList
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Servicios</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <LayoutList
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
              )}
              {sizePanel > 14 && "Servicios"}
            </Button>
            <Button
              onClick={() => setPage(4)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 4 ? "bg-green-200" : "bg-transparent"
              }`}
            >
              
              {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <FileCode
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Documentación</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <FileCode
                  className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                />
              )}
              {sizePanel > 14 && "Documentación"}
            </Button>
            {/* <Button
              onClick={() => setPage(5)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 5 ? "bg-green-200" : "bg-transparent"
              }`}
            >
              <HeartHandshake className={`${sizePanel < 14 ? "":"mr-4 h-4 w-4"}`} /> Soporte
            </Button> */}
            {/* <Button
              onClick={() => setPage(6)}
              className={`font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-green-200 ${
                page == 6 ? "bg-green-200" : "bg-transparent"
              }`}
            >
              <Settings className={`${sizePanel < 14 ? "":"mr-4 h-4 w-4"}`} /> Ajustes
            </Button> */}
            <Link to="/">
              <Button className="font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-transparent hover:bg-red-200">
                
                {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <ChevronLeft
                    className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                  />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Volver</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <ChevronLeft
                    className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                  />
              )}
                {sizePanel > 14 && "Volver"}
              </Button>
            </Link>
            <Link to="/">
              <Button
                onClick={() => localStorage.removeItem("token")}
                className="font-[OpenSans] bg-transparent mb-2 justify-start text-black w-full border-2 border-transparent hover:bg-transparent hover:bg-red-200"
              >
                
                {(sizePanel > 18 || sizePanel < 14) && (
                sizePanel < 14 ? <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <LogOut
                    className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                  />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Cerrar sesion</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>:
                <LogOut
                    className={`${sizePanel < 14 ? "" : "mr-4 h-4 w-4"}`}
                  />
              )}
                {sizePanel > 14 && "Cerrar sesion"}
              </Button>
            </Link>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80} className="!overflow-y-auto">
          {page == 1 && <Perfil />}
          {page == 2 && <Pagos />}
          {page == 3 && <Servicios />}
          {page == 4 && <Documentacion />}
          {/* {page == 5 && <Soporte />} */}
          {/* {page == 6 && <Ajustes />} */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Profile;
