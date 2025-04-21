import React, { useState, useEffect } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      console.log("Pizza recibida:", data);
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (!pizza) return <p className="text-center mt-5 text-danger">No se encontró la pizza.</p>;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="card-img-top"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h2 className="card-title text-capitalize">{pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <h5 className="mt-3">Ingredientes:</h5>
              <ul className="list-unstyled ms-3">
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>🍕 {ing}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0 text-success fw-bold">Precio: ${pizza.price}</h4>
                <button className="btn btn-primary" type="button">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
