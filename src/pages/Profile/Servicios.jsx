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
import axios from "axios";

import { useContext, useEffect, useState } from "react";
import PlanCards from "@/components/ui/created/PlanCards";
import { UserContext } from "@/utils/context/User/UserContext";

// GRAFICAS

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useToast } from "@/components/ui/use-toast";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Grafico de uso de la API',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


const Servicios = () => {
  const [serviceSelected, setServiceSelected] = useState(null);
  const [apiKey, setApiKey] = useState(null);
  const { usuario, updateUsuario } = useContext(UserContext);
  const {toast} = useToast()

  const data = {
    labels,
    datasets: [
      {
        label: 'Peticiones',
        data: [apiKey?.usage],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  useEffect(() => {
    if(serviceSelected != null){
      console.log(usuario)
      setApiKey(usuario.apikeys.find(api => api.serviceId == serviceSelected))
    }
  },[serviceSelected])

  const generateApiKey = (serviceId, plan) => {
    axios
      .post("/user/service/generateKey", {
        serviceId,
        userId: usuario.id,
        plan,
      })
      .then(({ data }) => {
        toast({
          title:"Tu API KEY fue generada exitosamente",
          description:"Desliza hacia abajo la pantalla puedes copiar tu API KEY para empezar a utilizarla"
        })
        setApiKey(data);
        updateUsuario()
      },(e) => toast({
        variant:"destructive",
        title:"Ha ocurrido un problema",
        description:e.response.data
      }));
  };

  const copyApiToClipboard = () => {
    navigator.clipboard.writeText(apiKey?.key);
    toast({
      title:"Texto copiado exitosamente",
      description:"Tu API KEY se encuentra almacenada en tu portapales"
    })
 };

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
                    action: () => generateApiKey(1, "BASICO"),
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
                    action: () => generateApiKey(1, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(1, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
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
                    action: () => generateApiKey(2, "BASICO"),
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
                    action: () => generateApiKey(2, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(2, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
            </CardContent>
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
                    action: () => generateApiKey(3, "BASICO"),
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
                    action: () => generateApiKey(3, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(3, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
            </CardContent>
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
                    action: () => generateApiKey(4, "BASICO"),
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
                    action: () => generateApiKey(4, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(4, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
            </CardContent>
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
                    action: () => generateApiKey(5, "BASICO"),
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
                    action: () => generateApiKey(5, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(5, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
            </CardContent>
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
                    action: () => generateApiKey(6, "BASICO"),
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
                    action: () => generateApiKey(6, "PROFESIONAL"),
                  },
                  {
                    name: "PERSONALIZADO",
                    benefits: [
                      "Todos los beneficios del plan <b>profesional</b>",
                      "<b>+100 tarjetas digitales</b> por empresa",
                      "Asesoria <b>personalizada</b> para la empresa",
                      "Soporte <b>personalizado</b> para la empresa",
                    ],
                    action: () => generateApiKey(6, "PERSONALIZADO"),
                  },
                ]}
              />
              <h3 className="font-bold mt-8 mb-3">¿Como usar el servicio?</h3>
              <p className="text-gray-600 text-md">
                Una vez adquirido el <b>plan</b> que necesites te otorgaremos
                una <b>API KEY</b> que se verá reflejada debajo de éste texto,
                ésta <b>API KEY</b> es la que usarás para realizar las
                peticiones a los endpoints que te proporcionamos en el apartado{" "}
                <b>Documentación</b>
              </p>
              <div className="flex w-full items-center space-x-2 my-5">
                <Input
                  value={apiKey?.key ?? "XXXX-XXXX-XXXX-XXXXX"}
                  disabled={apiKey ? false : true}
                  className="w-96"
                  type="email"
                  placeholder="Email"
                />
                <Button
                  disabled={apiKey ? false : true}
                  type="submit"
                  className="bg-black font-bold"
                  onClick={() => copyApiToClipboard()}
                >
                  Copiar API KEY
                </Button>
                {apiKey?.plan == "BASICO" &&<div className="bg-gradient-to-r from-blue-200 to-cyan-200 font-bold px-3 py-2 rounded-md cursor-default">BASICO</div>}
                {apiKey?.plan == "PROFESIONAL" &&<div className="bg-gradient-to-r from-violet-200 to-pink-200 font-bold px-3 py-2 rounded-md cursor-default">PROFESIONAL</div>}
                {apiKey?.plan == "PERSONALIZADO" &&<div className="bg-gradient-to-r from-orange-300 to-amber-300 font-bold px-3 py-2 rounded-md cursor-default">PERSONALIZADO</div>}
              </div>
              {apiKey && <Line className="mt-10" options={options} data={data} />}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Servicios;
