import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

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

const Pagos = () => {

  const [open, setOpen] = useState(false)
  const [monto, setMonto] = useState(0)

  const pagarAhora = () => {
    setOpen(false)
    var checkout = new WidgetCheckout({
      currency: "COP",
      amountInCents: monto+"00",
      reference: "123123123",
      publicKey: "pub_test_w28dxS2v9clmkb8UbFrlkw3GxBUx3bsq",
    });
    checkout.open(function (result) {
      var transaction = result.transaction;
      if (transaction.status == "APPROVED") {
        toast.success("Compra exitosa");
        axios.post("/buy", {
          transaction: transaction,
          userId: user.id,
          packId: pack.id,
          person: dataPay.person,
          reserva: true,
          inicio: dataPay.inicio,
          fin: dataPay.fin,
          email: user.email,
          passenger: passenger,
          comprado: dayjs().format("YYYY-MM-DD"),
        });
        // TODO: ENVIAR COMPROBANTE Y DATOS DE LOS PASAJEROS AL CORREO DE VIAJAYA
        // setTimeout(() => {
        //   navigate("/profile");
        // }, 2000);
      } else {
        toast.error("No pudimos realizar el pago");
      }
    });
  };

  return (
    <div className="bg-gray-100 font-[OpenSans] px-20 py-10">
      <Card className="font-[OpenSans] px-10 py-5">
        <div className="p-3.5 flex justify-between">
          <div>
            <h2 className="text-sm">Tienes balance de</h2>
            <h2 className="font-bold text-2xl">$250.000</h2>
          </div>
          <div className="flex max-w-sm items-left">
            {/* <Input type="number" placeholder="Saldo" /> */}
            <Sheet onOpenChange={setOpen} open={open}>
              <SheetTrigger className="text-left">
                <Button type="submit">Recargar saldo</Button>
              </SheetTrigger>
              <SheetContent className="w-full">
                <ScrollArea>
                  <SheetHeader>
                    <SheetTitle>Recargar saldo</SheetTitle>
                    <br></br>
                    <SheetDescription className={"font-[OpenSans] px-1"}>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Monto a recargar</Label>
                        <Input
                          type="number"
                          id="email"
                          value={monto}
                          onChange={(e) => setMonto(e.target.value)}
                          placeholder="Cantidad"
                        />
                      </div>

                      <Select className="w-full font-[OpenSans]">
                        <SelectTrigger className="w-full text-left h-fit my-4">
                          <SelectValue placeholder="Metodo de pago" />
                        </SelectTrigger>
                        <SelectContent className="font-[OpenSans]">
                          <SelectGroup>
                            {/* <SelectLabel>Fruits</SelectLabel> */}
                            <SelectItem value="apple">
                              <div className=" transition-all cursor-pointer flex items-center space-x-4 p-4">
                                {/* <QrCode /> */}
                                <img src={mastercard} className="w-10" />
                                <div className="flex-1 space-y-1">
                                  <p className="text-sm font-bold leading-none">
                                    XXXX-XXXX-XXXX-3527
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Vencimiento 04/24
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="banana">
                              <div className="transition-all cursor-pointer flex items-center space-x-4 p-4">
                                {/* <QrCode /> */}
                                <img src={paypal} className="w-10" />
                                <div className="flex-1 space-y-1">
                                  <p className="text-sm font-bold leading-none">
                                    Edgar David Vilchez
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    edgarrios412@gmail.com
                                  </p>
                                </div>
                              </div>
                            </SelectItem>
                            {/* <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem> */}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Button
                        className="w-full"
                        onClick={pagarAhora}
                      >
                        <CreditCard className="mx-2 w-5" />
                        Pagar ahora
                      </Button>
                    </SheetDescription>
                  </SheetHeader>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <p className="text-gray-400 p-3.5 text-sm">
          Evita que tus servicios sean suspendidos, mantén siempre tu cuenta con
          saldo positivo
        </p>
        <div className="p-3.5">
          <h2 className="font-bold py-3">Metodos de pagos</h2>
          <div className="flex flex-col gap-4">
            <div className="hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              {/* <QrCode /> */}
              <img src={mastercard} className="w-10" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  XXXX-XXXX-XXXX-3527
                </p>
                <p className="text-sm text-muted-foreground">
                  Vencimiento 04/24
                </p>
              </div>
              <Button className="bg-transparent text-black font-bold hover:bg-gray-300">
                Eliminar
              </Button>
            </div>
            <div className="hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer flex items-center space-x-4 rounded-md border p-4">
              {/* <QrCode /> */}
              <img src={paypal} className="w-10" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold leading-none">
                  Edgar David Vilchez
                </p>
                <p className="text-sm text-muted-foreground">
                  edgarrios412@gmail.com
                </p>
              </div>
              <Button className="bg-transparent text-black font-bold hover:bg-gray-300">
                Eliminar
              </Button>
            </div>
          </div>
        </div>
        <h2 className="font-bold p-3.5">Historial de pagos</h2>
        <Table>
          <TableCaption>Estos son tus ultimos pagos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Codigo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Metodo</TableHead>
              <TableHead className="text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2.500.000.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Card>
    </div>
  );
};

export default Pagos;
