import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { motion } from "framer-motion";

export default ({ open, setOpen, setIsLogged }) => {
  // const isDesktop = useMediaQuery("(min-width: 768px)")
  const [login, setLogin] = useState(true)

  return login ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={"font-xl"}>
          Ingresar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ingresar</DialogTitle>
          <DialogDescription className={"font-[OpenSans] text-sm"}>
            Ingresa a tu cuenta para tener acceso a todas las funcionalidades
            disponibles en la web
          </DialogDescription>
        </DialogHeader>
        <LoginForm setIsLogged={setIsLogged} setLogin={setLogin} />
      </DialogContent>
    </Dialog>
  ) : (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={"font-xl"}>
          Ingresar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrate</DialogTitle>
          <DialogDescription className={"font-[OpenSans] text-sm"}>
            Si aún no tienes cuenta en TELDIP puedes registrarte para acceder a todas sus funciones
          </DialogDescription>
        </DialogHeader>
        <RegisterForm setIsLogged={setIsLogged} setLogin={setLogin} />
      </DialogContent>
    </Dialog>
  );
};

function LoginForm({ className, setIsLogged, setLogin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const authUser = (e) => {
    e.preventDefault();
    setIsLoader(true);
    axios
      .post("/user/auth", {
        email,
        password,
      })
      .then(
        ({ data }) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem("token", data.token);
            setIsLogged(true);
          }
          setIsLoader(false);
        },
        (e) => {
          alert(e.response.data);
          setIsLoader(false);
        }
      );
  };

  return (
    <form
      onSubmit={authUser}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Correo electronico</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Contraseña</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      {!isLoader ? (
        <Button type="submit">Ingresar</Button>
      ) : (
        <Button type="button">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={1}
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Validando credenciales
          </motion.span>
        </Button>
      )}
      <p onClick={() => setLogin(false)} className="text-sm text-center cursor-pointer">
        Aun no tienes cuenta? Registrate
      </p>
    </form>
  );
}

function RegisterForm({ className, setIsLogged, setLogin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  // REGISTRO

  const [registroEmail, setRegistroEmail] = useState("")
  const [registroNombres, setRegistroNombres] = useState("")
  const [registroApellidos, setRegistroApellidos] = useState("")
  const [registroTelefono, setRegistroTelefono] = useState("")
  const [registroPassword, setRegistroPassword] = useState("")
  const [registroPassword2, setRegistroPassword2] = useState("")

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoader(true);
    if(registroPassword !== registroPassword2){
      setIsLoader(false)
      return alert("Las contraseñas no coinciden");
    }
    axios
      .post("/user", {
        name:registroNombres.toUpperCase(),
        lastname:registroApellidos.toUpperCase(),
        phone:registroTelefono,
        email:registroEmail,
        password:registroPassword,
      })
      .then(
        ({ data }) => {
          console.log(data);
          setLogin(true)
          setIsLoader(false);
          alert("Usuario creado exitosamente, ya puedes ingresar")
        },
        (e) => {
          alert(e.response.data);
          setIsLoader(false);
        }
      );
  };

  const authUser = (e) => {
    e.preventDefault();
    setIsLoader(true);
    axios
      .post("/user/auth", {
        email,
        password,
      })
      .then(
        ({ data }) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem("token", data.token);
            setIsLogged(true);
          }
          setIsLoader(false);
        },
        (e) => {
          alert(e.response.data);
          setIsLoader(false);
        }
      );
  };

  return (
    <form
      onSubmit={registerUser}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Correo electronico</Label>
        <Input
          
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroEmail(e.target.value)}
          type="email"
          id="email"
          value={registroEmail}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Nombres</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroNombres(e.target.value)}
          type="text"
          id="name"
          value={registroNombres}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Apellidos</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroApellidos(e.target.value)}
          type="text"
          id="lastname"
          value={registroApellidos}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Telefono</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroTelefono(e.target.value)}
          type="number"
          id="phone"
          value={registroTelefono}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Contraseña</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroPassword(e.target.value)}
          type="password"
          id="password"
          value={registroPassword}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Repetir contraseña</Label>
        <Input
          className={"font-[OpenSans] text-sm"}
          onChange={(e) => setRegistroPassword2(e.target.value)}
          type="password"
          id="password"
          value={registroPassword2}
        />
      </div>
      {!isLoader ? (
        <Button type="submit">Registrarme</Button>
      ) : (
        <Button type="button">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={1}
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Validando credenciales
          </motion.span>
        </Button>
      )}
      <p onClick={() => setLogin(true)} className="text-sm text-center cursor-pointer">
        Ya tienes cuenta? Ingresa
      </p>
    </form>
  );
}
