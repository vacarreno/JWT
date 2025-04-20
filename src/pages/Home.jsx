import React, { useState } from "react";
import Header from "../components/Header.jsx";
import fondoHeader from "../assets/img/Header.jpg";
import CardPizza from "../components/CardPizza.jsx";
// import BotonIncrementar from "../components/BotonIncrementar.jsx";
// import BotonDisminuir from "../components/BotonDisminuir.jsx";
import { pizzas } from "../data/pizzas";

export default function Home() {
  // Estado para manejar el carrito de compras incrementa con el botón Cuentas
  const [cuenta, setCuenta] = useState(0);

  const incrementarCuenta = () => {
    setCuenta(cuenta + 1);
  };

  const disminuirCuenta = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <Header backgroundImage={fondoHeader} />

      {/* ***************** BOTONES INCREMENTAR Y DISMINUIR **************** */}
      {/*
      <div className="container text-center mt-4">
        <h2 className="text-center mt-4">Cuenta: {cuenta}</h2>

        <div className="flex justify-center gap-8 mt-4">
          <BotonIncrementar
            className="bg-blue-500 text-white px-4 py-2 rounded"
            incrementar={incrementarCuenta}
          />
          <BotonDisminuir
            className="bg-red-500 text-white px-4 py-2 rounded"
            disminuir={disminuirCuenta}
          />
        </div>
      </div>
      */}

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <CardPizza objeto={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
