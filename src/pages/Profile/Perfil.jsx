import { BellRing, Check, Send, FileQuestion } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    title: "Tu cita ha sido agendada con éxito",
    description: "Hace 1 hora",
  },
  {
    title: "Tienes un mensaje de Edgar!",
    description: "Hace 23 horas",
  },
  {
    title: "Tu suscripción expira pronto!",
    description: "Hace 1 mes",
  },
];

const Perfil = ({ className, ...props }) => {
  const [message, setMessage] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const createTicket = () => {
    axios
      .post("/user/ticket", {
        userId: 2,
        message,
      })
      .then(({ data }) => {
        setMessage("");
        alert(data.response);
      });
  };

  const updatePassword = () => {
    if (newPassword !== newPassword2)
      return alert("Las contreñas no coinciden");
    axios
      .put("/user/password", {
        userId: 1,
        password: oldPassword,
        newpassword: newPassword,
      })
      .then(
        ({ data }) => {
          setNewPassword2("");
          setNewPassword("");
          setOldPassword("");
          alert(data.response);
        },
        (e) => {
          alert(e.response.data);
        }
      );
  };

  return (
    <div className="bg-gray-100 font-[OpenSans] px-20 py-10">
      <div className="flex gap-10">
        <Card className={cn("w-1/3", className)} {...props}>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>Tienes 3 notificaciones no leídas</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Notificacion celular
                </p>
                <p className="text-sm text-muted-foreground">
                  Recibir notificacion por sms
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Marcar todo como leído
            </Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-2/3", className)} {...props}>
          <CardHeader>
            <CardTitle>Actualizar contraseña</CardTitle>
            <CardDescription>
              Si necesitas cambiar o actualizar tus contraseña en este apartado
              puedes realizarlo de forma rápida
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="font-bold">
                Nueva contraseña
              </Label>
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                id="email"
                placeholder="Ingrese su nueva contraseña"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="font-bold">
                Repetir contraseña
              </Label>
              <Input
                value={newPassword2}
                onChange={(e) => setNewPassword2(e.target.value)}
                type="password"
                id="email"
                placeholder="Repita nuevamente su contraseña"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="font-bold">
                Contraseña anterior
              </Label>
              <Input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                id="email"
                placeholder="Ingrese su contraseña anterior"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-1.5">
              Recuerda usar una contraseña segura
            </p>
            <Button onClick={updatePassword}>
              <Send className="mr-2 h-4 w-4" />
              Actualizar contraseña
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className={cn("mt-10 w-full", className)} {...props}>
        <CardHeader>
          <CardTitle>Soporte</CardTitle>
          <CardDescription>
            Solicita soporte y en menos de 24 horas estaremos en contacto
            contigo
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Sheet>
            <SheetTrigger className="text-left">
              <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
                <FileQuestion />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Preguntas frecuentes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Antes de enviar un mensaje a soporte te recomendamos ver las
                    preguntas frecuentes
                  </p>
                </div>
                {/* <Button>Ver preguntas comunes</Button> */}
              </div>
            </SheetTrigger>
            <SheetContent className="w-full">
              <ScrollArea>
              <SheetHeader>
                <SheetTitle>Preguntas frecuentes</SheetTitle>
                <ScrollArea className="h-[90vh] w-full px-2">
                <SheetDescription className={"font-[OpenSans]"}>
                  <Accordion type="multiple" collapsible className="w-full text-left leading-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="hover:no-underline text-left">
                        <div className="mt-10">
                          <span className="bg-green-300 text-black font-bold px-1 py-0.5 rounded-md text-[12px]">
                            Nueva
                          </span>
                          <span className="text-gray-600 font-bold px-2 py-1 rounded-md text-sm">
                            ¿Para usar las herramientas tengo que pagar?
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Claro que no, contamos con modelos freemium, no es obligatorio pagar para empezar, te daremos una versión limitada de prueba para que conozcas nuestra herramientas, cuando estés seguro de comprar puedes hacerlo
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="hover:no-underline text-left">
                        <div className="mt-1">
                          <span className="bg-green-300 text-black font-bold px-1 py-0.5 rounded-md text-[12px]">
                            Nueva
                          </span>
                          <span className="text-gray-600 font-bold px-2 py-1 rounded-md text-sm">
                            ¿Como puedo recargar saldo desde NEQUI o PSE?
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Respuesta AQUI
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="hover:no-underline text-left">
                        <div className="mt-1">
                          <span className="text-gray-600 font-bold py-1 rounded-md text-sm">
                            Envié una solicitud a soporte y han pasado 12 horas y nada que responden
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Claro que no, contamos con modelos freemium, no es obligatorio pagar para empezar, te daremos una versión limitada de prueba para que conozcas nuestra herramientas, cuando estés seguro de comprar puedes hacerlo
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </SheetDescription>
                </ScrollArea>
              </SheetHeader>
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <h3 className="text-sm text-muted-foreground my-4">
            Si en la opcion de arriba no encontraste tu pregunta o no pudo dar
            solución a tu duda entonces puedes llenar el siguiente campo y
            explicarnos tu inquietud para poder ayudarte lo más rápido posible
          </h3>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2" className="font-bold mb-2">
              ¿En que podemos ayudarte?
            </Label>
            <Textarea
              placeholder="Escribe tu inquietud"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message-2"
            />
            <p className="text-sm text-muted-foreground">
              Tu mensaje será enviado al equipo de soporte de TELDIP
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={createTicket} className="w-full">
            <Send className="mr-2 h-4 w-4" /> Enviar mensaje a soporte
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Perfil;
