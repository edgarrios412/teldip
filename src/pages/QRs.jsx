import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

const QRs = () => {
  const [usuario, setUsuario] = useState([]);
  const { serial } = useParams();
  useEffect(() => {
    axios.get("/user/qr/" + serial).then(
      ({ data }) => setUsuario(data),
      () => setUsuario(null)
    );
  },[]);
  return (
    <div className="bg-gray-100 h-full absolute w-full font-[OpenSans]">
      {usuario ? (
        <div className="border-2 h-[520px] w-80 rounded-lg bg-white m-auto mt-16 p-6">
          <img
            src={`https://back-teldip.onrender.com/uploads/${usuario.image}`}
            className="rounded-full w-24 h-24 bg-green-300 m-auto"
          ></img>
          <div className="text-center mt-3">
            <h2 className="text-xl font-bold px-10">
              {usuario.name} {usuario.lastname}
            </h2>
            <h3 className=" text-gray-400 text-sm">Supervisor de obra</h3>
            <div className="text-left mt-4 grid grid-cols-2">
              <div className="ml-6">
                <h4 className="font-bold text-sm">Documento</h4>
                <h4 className="mb-4 text-sm">1075650712</h4>
              </div>
              <div className="">
                <h4 className="font-bold text-sm">Fecha expedición</h4>
                <h4 className="mb-4 text-sm">16/04/2024</h4>
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-sm">Teléfono</h4>
                <h4 className="mb-4 text-sm">3118268264</h4>
              </div>
              <div className="">
                <h4 className="font-bold text-sm">Fecha caducidad</h4>
                <h4 className="mb-4 text-sm">16/04/2025</h4>
              </div>
            </div>
            <div className="m-auto">
                <h4 className="font-bold text-sm">Número de certficación</h4>
                <h4 className="mb-4 text-sm">3120756350712</h4>
              </div>
            <QRCode
              className="m-auto mt-4"
              size={80}
              // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"https://teldip.com/qr/" + serial}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      ) : (
        <h1>Usuario no encontrado</h1>
      )}
    </div>
  );
};

export default QRs;
