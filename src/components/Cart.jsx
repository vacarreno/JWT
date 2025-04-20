import React, { useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import BotonIncrementar from '../components/BotonIncrementar';
import BotonDisminuir from '../components/BotonDisminuir';

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const incrementarCantidad = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(nuevoCart);
  };

  const disminuirCantidad = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(nuevoCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  const totalFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-2">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizza.name}</h5>
                    <p className="card-text">
                      Precio: {pizza.price.toLocaleString('es-CL', {
                        style: 'currency',
                        currency: 'CLP',
                      })}
                    </p>
                    <p className="card-text">
                      Cantidad: <strong>{pizza.count}</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center px-3 gap-2">
                  <BotonDisminuir disminuir={() => disminuirCantidad(pizza.id)} />
                  <BotonIncrementar incrementar={() => incrementarCantidad(pizza.id)} />
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: {totalFormateado}</h4>
            <button className="btn btn-success">💳 Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
}
