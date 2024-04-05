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
  return (
    <div className="bg-gray-100 font-[OpenSans] px-20 py-10">
      <Card className="font-[OpenSans] px-10 py-5">
        <div className="p-3.5 flex justify-between">
          <div>
            <h2 className="text-sm">Tienes balance de</h2>
            <h2 className="font-bold text-2xl">$250.000</h2>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="number" placeholder="Saldo" />
            <Button type="submit">Recargar saldo</Button>
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
