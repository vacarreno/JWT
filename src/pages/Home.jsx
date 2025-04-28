import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"; // Asegúrate de importar el contexto
import Header from "../components/Header.jsx";
import fondoHeader from "../assets/img/Header.jpg";
import CardPizza from "../components/CardPizza.jsx";
import BotonIncrementar from "../components/BotonIncrementar.jsx";
import BotonDisminuir from "../components/BotonDisminuir.jsx";

export default function Home() {
 
  // Estado para manejar el carrito de compras
  const [cuenta, setCuenta] = useState(0);

  const incrementarCuenta = () => {
    setCuenta((prev) => prev + 1);
  };

  const disminuirCuenta = () => {
    setCuenta((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Consumiendo el contexto para obtener las pizzas
  const { pizzas } = useContext(GlobalContext);

  return (
    <div>
      <Header backgroundImage={fondoHeader} />
      
      <div className="text-center mt-3">
        <h5>Productos en carrito: {cuenta}</h5>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div
              key={pizza.id || index}
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
