import {
  useInView,
  motion,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
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

import {
  QrCode,
  ShieldCheck,
  Fingerprint,
  PenTool,
  Cctv,
  Cpu,
  ChevronLeft,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import PlanCards from "@/components/ui/created/planCards";

const Servicios = () => {
  const [serviceSelected, setServiceSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-100 font-[OpenSans] px-20 py-10"
    >
      {!serviceSelected && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle>Nuestros servicios</CardTitle>
              <CardDescription>
                Estos son los servicios que ofrecemos a nuestros clientes,
                puedes realizar la compra directamente desde la pagina o
                contactar con nuestro soporte para ayudarte con la compra
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div
                  onClick={() => setServiceSelected(1)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <QrCode />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Tarjetas digitales
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Documento virtual seguro y fácil de usar para
                      autenticación y verificación
                    </p>
                  </div>
                  {/* <Button>Ver preguntas comunes</Button> */}
                </div>
                <div
                  onClick={() => setServiceSelected(2)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <ShieldCheck />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Certificados digitales
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Asegura la integridad, validación y seguridad de tus
                      documentos médicos
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setServiceSelected(3)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <Fingerprint />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Biometricos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tecnología de seguridad avanzada para identificar y
                      autenticar de manera única
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setServiceSelected(4)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <PenTool />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Firma digital
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Validación electrónica de documentos con seguridad y
                      autenticidad
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setServiceSelected(5)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <Cctv />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Vigilancia automatizada
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Protege tu propiedad con nuestra vigilancia con drones,
                      ofreciendo seguridad 24/7
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setServiceSelected(6)}
                  className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4"
                >
                  <Cpu />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold leading-none">
                      Desarrollo de software
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Transforma tus ideas en soluciones. Creamos aplicaciones
                      personalizadas que impulsan tu negocio hacia el éxito
                    </p>
                  </div>
                </div>
                {/* <Button>Ver preguntas comunes</Button> */}
              </div>
              {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
      {serviceSelected == 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Tarjetas digitales
              </CardTitle>
              <br></br>
              <CardDescription>
                Las tarjetas digitales son una tecnología innovadora que permite
                a los usuarios almacenar información digital en una tarjeta
                física, similar a una tarjeta de crédito o débito. A diferencia
                de las tarjetas tradicionales, las tarjetas digitales no
                contienen información financiera, sino que pueden almacenar
                datos como identificación, contactos, citas, reseñas, y más.
                Estas tarjetas pueden ser utilizadas en una variedad de
                dispositivos, incluyendo teléfonos inteligentes, tablets, y
                lectores de tarjetas digitales.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
          </Card>
        </motion.div>
      )}
      {serviceSelected == 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Certificados digitales
              </CardTitle>
              <CardDescription>
                Asegura la integridad, validación y seguridad de tus documentos
                médicos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
      {serviceSelected == 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Biometricos
              </CardTitle>
              <CardDescription>
                Tecnología de seguridad avanzada para identificar y autenticar
                de manera única
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
      {serviceSelected == 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Firma digital
              </CardTitle>
              <CardDescription>
                Validación electrónica de documentos con seguridad y
                autenticidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
      {serviceSelected == 5 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Vigilancia automatizada
              </CardTitle>
              <CardDescription>
                Protege tu propiedad con nuestra vigilancia con drones,
                ofreciendo seguridad 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
      {serviceSelected == 6 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="font-[OpenSans] px-5 py-5">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <ChevronLeft
                  className="mt-1 cursor-pointer"
                  onClick={() => setServiceSelected(null)}
                />{" "}
                Desarrollo de software
              </CardTitle>
              <CardDescription>
                Transforma tus ideas en soluciones. Creamos aplicaciones
                personalizadas que impulsan tu negocio hacia el éxito
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-center text-2xl my-4">Planes</h1>
              <PlanCards
                plans={[
                  {
                    name: "BASICO",
                    price: "199,999",
                    periodFact: "mes",
                    benefits: [
                      "Hasta <b>25 tarjetas digitales</b> por empresa",
                      "Hasta <b>1</b> empresa por usuario",
                      "Soporte <b>general</b>",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PROFESIONAL",
                    price: "499,999",
                    periodFact: "mes",
                    benefits: [
                      "Todos los beneficios del plan <b>básico</b>",
                      "Hasta <b>50 tarjetas digitales</b> por empresa",
                      "Hasta <b>2</b> empresas por usuario",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => alert("COMPRADO"),
                  },
                ]}
              />
            </CardContent>
            {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Servicios;
