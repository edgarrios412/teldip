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

import { QrCode,ShieldCheck, Fingerprint, PenTool, Cctv, Cpu, ChevronLeft } from "lucide-react";
import { useState } from "react";

const Servicios = () => {

  const [serviceSelected, setServiceSelected] = useState(null)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="bg-gray-100 font-[OpenSans] px-20 py-10">
      {!serviceSelected && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle>Nuestros servicios</CardTitle>
          <CardDescription>
            Estos son los servicios que ofrecemos a nuestros clientes, puedes realizar la compra directamente
            desde la pagina o contactar con nuestro soporte para ayudarte con la compra
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div onClick={() => setServiceSelected(1)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
            <div onClick={() => setServiceSelected(2)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
            <div onClick={() => setServiceSelected(3)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
            <div onClick={() => setServiceSelected(4)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
            <div onClick={() => setServiceSelected(5)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
            <div onClick={() => setServiceSelected(6)} className="hover:border-green-200 hover:bg-green-100 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
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
      </Card></motion.div>}
      {serviceSelected == 1 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Tarjetas digitales</CardTitle>
          <CardDescription>
            Documento virtual seguro y fácil de usar para autenticación y verificación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
      {serviceSelected == 2 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Certificados digitales</CardTitle>
          <CardDescription>
          Asegura la integridad, validación y seguridad de tus documentos médicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
      {serviceSelected == 3 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Biometricos</CardTitle>
          <CardDescription>
          Tecnología de seguridad avanzada para identificar y autenticar de manera única
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
      {serviceSelected == 4 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Firma digital</CardTitle>
          <CardDescription>
          Validación electrónica de documentos con seguridad y autenticidad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
      {serviceSelected == 5 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Vigilancia automatizada</CardTitle>
          <CardDescription>
          Protege tu propiedad con nuestra vigilancia con drones, ofreciendo seguridad 24/7
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
      {serviceSelected == 6 && <motion.div initial={{opacity:0}} animate={{opacity:1}}><Card className="font-[OpenSans] px-5 py-5">
        <CardHeader>
          <CardTitle className="flex gap-4 items-center"><ChevronLeft className="mt-1 cursor-pointer" onClick={() => setServiceSelected(null)} /> Desarrollo de software</CardTitle>
          <CardDescription>
          Transforma tus ideas en soluciones. Creamos aplicaciones personalizadas que impulsan tu negocio hacia el éxito
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <h1 className="m-auto text-center text-muted-foreground my-60">FALTA INGRESAR DATOS</h1>
          </div>
          {/* <p className="text-gray-400 text-sm">
            Evita que tus servicios sean suspendidos, mantén siempre tu cuenta
            con saldo positivo
          </p> */}
        </CardContent>
        {/* <h2 className="font-bold p-3.5">Historial de pagos</h2> */}
      </Card></motion.div>}
    </motion.div>
  );
};

export default Servicios;
