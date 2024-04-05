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
  return (
    <div className="bg-gray-100 font-[OpenSans] px-20 py-10">
      <div className="flex gap-10">
        <Card className={cn("w-[380px]", className)} {...props}>
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
        <Card className={cn("w-[580px]", className)} {...props}>
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
              <Input type="password" id="email" placeholder="Ingrese su nueva contraseña" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="font-bold">
                Repetir contraseña
              </Label>
              <Input type="password" id="email" placeholder="Repita nuevamente su contraseña" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="font-bold">
                Contraseña anterior
              </Label>
              <Input type="password" id="email" placeholder="Ingrese su contraseña anterior" />
            </div>
            <p className="text-sm text-muted-foreground mb-1.5">
              Recuerda usar una contraseña segura
            </p>
            <Button>
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
          <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
            <FileQuestion />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Preguntas comunes
              </p>
              <p className="text-sm text-muted-foreground">
                Antes de enviar un mensaje a soporte te recomendamos ver las
                preguntas comunes
              </p>
            </div>
            {/* <Button>Ver preguntas comunes</Button> */}
          </div>
          <h3 className="text-sm text-muted-foreground my-4">
            Si en la opcion de arriba no encontraste tu pregunta o no pudo dar
            solución a tu duda entonces puedes llenar el siguiente campo y
            explicarnos tu inquietud para poder ayudarte lo más rápido posible
          </h3>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2" className="font-bold mb-2">
              ¿En que podemos ayudarte?
            </Label>
            <Textarea placeholder="Escribe tu inquietud" id="message-2" />
            <p className="text-sm text-muted-foreground">
              Tu mensaje será enviado al equipo de soporte de TELDIP
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Send className="mr-2 h-4 w-4" /> Enviar mensaje a soporte
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Perfil;
