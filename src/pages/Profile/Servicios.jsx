import { useInView, motion, useAnimation, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

import { QrCode,ShieldCheck, Fingerprint, PenTool, Cctv, Cpu } from "lucide-react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Pago",
    totalAmount: "$250.000.00",
    paymentMethod: "Tarjeta de crédito",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pendiente",
    totalAmount: "$150.000.00",
    paymentMethod: "Nequi",
  },
  {
    invoice: "INV003",
    paymentStatus: "No pagado",
    totalAmount: "$350.000.00",
    paymentMethod: "PSE",
  },
  {
    invoice: "INV004",
    paymentStatus: "Pago",
    totalAmount: "$45.000.00",
    paymentMethod: "Tarjeta de crédito",
  },
  {
    invoice: "INV005",
    paymentStatus: "Pago",
    totalAmount: "$550.000.00",
    paymentMethod: "Nequi",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pendiente",
    totalAmount: "$200.000.00",
    paymentMethod: "PSE",
  },
  {
    invoice: "INV007",
    paymentStatus: "No pagado",
    totalAmount: "$300.000.00",
    paymentMethod: "Tarjeta de crédito",
  },
];

const Servicios = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-gray-100 font-[OpenSans] px-20 py-10">
      <Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle>Nuestros servicios</CardTitle>
          <CardDescription>
            Estos son los servicios que ofrecemos a nuestros clientes, puedes realizar la compra directamente
            desde la pagina o contactar con nuestro soporte para ayudarte con la compra
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <QrCode />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Tarjetas digitales
                </p>
                <p className="text-sm text-muted-foreground">
                  Documento virtual seguro y fácil de usar para autenticación y verificación
                </p>
              </div>
              {/* <Button>Ver preguntas comunes</Button> */}
            </div>
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <ShieldCheck />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Certificados digitales
                </p>
                <p className="text-sm text-muted-foreground">
                  Asegura la integridad, validación y seguridad de tus documentos médicos
                </p>
              </div>
            </div>
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <Fingerprint />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Biometricos
                </p>
                <p className="text-sm text-muted-foreground">
                  Tecnología de seguridad avanzada para identificar y autenticar de manera única
                </p>
              </div>
            </div>
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <PenTool />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Firma digital
                </p>
                <p className="text-sm text-muted-foreground">
                  Validación electrónica de documentos con seguridad y autenticidad
                </p>
              </div>
            </div>
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <Cctv />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Vigilancia automatizada
                </p>
                <p className="text-sm text-muted-foreground">
                  Protege tu propiedad con nuestra vigilancia con drones, ofreciendo seguridad 24/7
                </p>
              </div>
            </div>
            <div className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              <Cpu />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Desarrollo de software
                </p>
                <p className="text-sm text-muted-foreground">
                Transforma tus ideas en soluciones. Creamos aplicaciones personalizadas que impulsan tu negocio hacia el éxito
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
  );
};

export default Servicios;
