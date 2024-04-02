import React, { useState } from "react";
import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios";
export default ({open, setOpen, setIsLogged}) => {

  // const isDesktop = useMediaQuery("(min-width: 768px)")

  if (true) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className={"font-xl"}>Ingresar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ingresar</DialogTitle>
            <DialogDescription className={"font-[OpenSans] text-sm"}>
              Ingresa a tu cuenta para tener acceso a todas las funcionalidades disponibles en la web
            </DialogDescription>
          </DialogHeader>
          <ProfileForm setIsLogged={setIsLogged} />
        </DialogContent>
      </Dialog>
    )
  }
 
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className, setIsLogged }) {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const authUser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/user/auth",{
      email,
      password
    }).then(({data}) => {
      console.log(data)
      if(data.token){
        localStorage.setItem("token", data.token)
        setIsLogged(true)
      }
    },(e) => {
      alert(e.response.data)
    })
  }

  return (
    <form onSubmit={authUser} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Correo electronico</Label>
        <Input className={"font-[OpenSans] text-sm"} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Contraseña</Label>
        <Input className={"font-[OpenSans] text-sm"} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
      </div>
      <Button type="submit">Ingresar</Button>
    </form>
  )
}