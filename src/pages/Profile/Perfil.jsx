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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useEffect, useState } from "react";
import {
  useInView,
  motion,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
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
import { UserContext } from "@/utils/context/User/UserContext";
import { useToast } from "@/components/ui/use-toast";

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
  const [tickets, setTickets] = useState([]);
  const [responseTicket, setResponseTicket] = useState("")
  const [idSelected, setIdSelected] = useState(null)
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const { usuario, updateUsuario } = useContext(UserContext);
  const { toast } = useToast()

  const createTicket = () => {
    axios
      .post("/user/ticket", {
        userId: usuario.id,
        message,
      })
      .then(({ data }) => {
        setMessage("");
        toast({
          duration:3000,
          title: data.response,
          description: "En unas horas tu ticket será atendido por el equipo de soporte",
        })
        updateUsuario()
      });
  };

  const updatePassword = () => {
    if (newPassword !== newPassword2)
      return alert("Las contreñas no coinciden");
    axios
      .put("/user/password", {
        userId: usuario.id,
        password: oldPassword,
        newpassword: newPassword,
      })
      .then(
        ({ data }) => {
          setNewPassword2("");
          setNewPassword("");
          setOldPassword("");
          toast({
            duration:3000,
            title: data.response,
          })
        },
        (e) => {
          alert(e.response.data);
        }
      );
  };

  const handleResponseTicket = () => {
    axios.put("/user/ticket/response",{
      id: idSelected,
      response: responseTicket
    }).then(() => {
      toast({
        duration:3000,
        title: "Ticket respondido exitosamente",
        description: "Se ha enviado una notificación al usuario",
      })
      setResponseTicket("")
      setIdSelected(null)
    })
  }

  const getTickets = () => {
    axios.get("/user/ticket/listar").then(({ data }) => setTickets(data));
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-100 font-[OpenSans] px-20 py-10"
    >
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
                      <Accordion
                        type="multiple"
                        collapsible
                        className="w-full text-left leading-6"
                      >
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
                            Claro que no, contamos con modelos freemium, no es
                            obligatorio pagar para empezar, te daremos una
                            versión limitada de prueba para que conozcas nuestra
                            herramientas, cuando estés seguro de comprar puedes
                            hacerlo
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
                          <AccordionContent>Respuesta AQUI</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger className="hover:no-underline text-left">
                            <div className="mt-1">
                              <span className="text-gray-600 font-bold py-1 rounded-md text-sm">
                                Envié una solicitud a soporte y han pasado 12
                                horas y nada que responden
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            Claro que no, contamos con modelos freemium, no es
                            obligatorio pagar para empezar, te daremos una
                            versión limitada de prueba para que conozcas nuestra
                            herramientas, cuando estés seguro de comprar puedes
                            hacerlo
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
          {usuario.tickets?.length > 0 && <>
          <p className="font-bold">Mis tickets abiertos</p>
          <Table>
            <TableCaption>
              Estos son los últimos tickets enviados a soporte
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Mensaje</TableHead>
                <TableHead>Mensaje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuario.tickets?.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{ticket.message}</TableCell>
                  <TableCell>{ticket.response ?? <p className="text-muted-foreground">Aún no han respondido tu ticket</p>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
          </>}
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

      {usuario.role > 1 && <Card className={cn("mt-10 w-full", className)} {...props}>
        <CardHeader>
          <CardTitle>Administración</CardTitle>
          <CardDescription>
            Mira y responde los tickets enviados a soporte
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <h3 className="text-sm text-muted-foreground my-4">
            Si en la opcion de arriba no encontraste tu pregunta o no pudo dar
            solución a tu duda entonces puedes llenar el siguiente campo y
            explicarnos tu inquietud para poder ayudarte lo más rápido posible
          </h3>

          <Table>
            <TableCaption>
              Estos son los últimos tickets enviados a soporte
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Usuario</TableHead>
                <TableHead>Mensaje</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets?.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{ticket.userId}</TableCell>
                  <TableCell>{ticket.message}</TableCell>
                  <TableCell className="text-right">
                    <Button onClick={() => setIdSelected(ticket.id)} className="bg-green-300 px-2 py-1 rounded-sm font-semibold text-black hover:bg-green-400 transition-all">Responder</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
          
          {idSelected && <>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2" className="font-bold mb-2">
              Responder a ID: {idSelected}
            </Label>
            <Textarea
              placeholder="Escribe tu respuesta"
              value={responseTicket}
              onChange={(e) => setResponseTicket(e.target.value)}
              id="message-2"
              />
            <p className="text-sm text-muted-foreground">
              Tu mensaje será enviado al equipo de soporte de TELDIP
            </p>
          </div>
          <Button onClick={handleResponseTicket} className="w-full">
            <Send className="mr-2 h-4 w-4" /> Responder ticket
          </Button>
          </>}
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>}
    </motion.div>
  );
};

export default Perfil;
