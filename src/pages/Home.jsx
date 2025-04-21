import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import fondoHeader from "../assets/img/Header.jpg";
import CardPizza from "../components/CardPizza.jsx";
import BotonIncrementar from "../components/BotonIncrementar.jsx";
import BotonDisminuir from "../components/BotonDisminuir.jsx";
import { pizzas } from "../data/pizzas";

export default function Home() {
  // Estado para manejar el carrito de compras
  const [cuenta, setCuenta] = useState(0);

  const incrementarCuenta = () => {
    setCuenta((prev) => prev + 1);
  };

  const disminuirCuenta = () => {
    setCuenta((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Estado para las pizzas obtenidas desde la API
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

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
              {/* Puedes pasar incrementarCuenta como prop si lo necesitas dentro de cada tarjeta */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
