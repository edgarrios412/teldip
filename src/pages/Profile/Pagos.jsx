import { Button } from "@/components/ui/button";
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
    <>
      <div className="px-20 py-10 font-[OpenSans]">
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
        <p className="text-gray-400 p-3.5 text-sm">Evita que tus servicios sean suspendidos, mantén siempre tu cuenta con saldo positivo</p>
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
      </div>
    </>
  );
};

export default Pagos;
