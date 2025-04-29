import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';  // Importar Link de react-router-dom
import { GlobalContext } from '../context/GlobalContext';

export default function CardPizza({ objeto }) {
  const { cart, setCart } = useContext(GlobalContext);
  const [showMessage, setShowMessage] = useState(false); // Estado para mostrar el mensaje

  const {
    id,
    name = "Nombre no encontrado",
    price = 0,
    ingredients = ["No hay ingredientes"],
    img = "Imagen no encontrada",
    desc = "Descripción no encontrada"
  } = objeto;

  const priceFormateado = price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  const handleAddToCart = () => {
    const existingPizza = cart.find((pizza) => pizza.id === id);
    if (existingPizza) {
      // Si la pizza ya está en el carrito, solo incrementamos la cantidad
      const updatedCart = cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      );
      setCart(updatedCart);
    } else {
      // Si la pizza no está en el carrito, la agregamos
      const newPizza = { ...objeto, count: 1 };  // Agregar un campo de cantidad
      setCart([...cart, newPizza]);
    }

    // Mostrar el mensaje durante 2 segundos
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="card d-flex flex-column" style={{ width: '100%', maxWidth: '400px', height: '100%' }}>
      <img
        src={img || "path/to/default/image.jpg"}
        alt={name}
        className="card-img-top object-cover h-48 w-full"
      />
      <div className="card-body flex flex-col justify-between p-4">
        <h4 className="card-title text-lg font-semibold">{name}</h4>
        <p className="card-text text-gray-600">{desc}</p>
        <div style={{ borderTop: '2px solid #ccc', margin: '10px 0' }}></div>

        <p className="card-subtitle mb-2 text-muted fw-bold">Ingredientes:</p>
        <ul className="list-unstyled mb-2">
          {Array.isArray(ingredients) ? (
            ingredients.map((ing, index) => (
              <li key={index}>🍕 {ing}</li>
            ))
          ) : (
            <li>🍕 {ingredients}</li>
          )}
        </ul>
        <p className="font-bold">{priceFormateado}</p>

        {/* Mensaje de éxito al agregar al carrito */}
        {showMessage && (
          <div className="alert alert-success mt-3">
            ¡Pizza añadida al carrito!
          </div>
        )}

        {/* Separación y alineación de botones */}
        <div className="mt-3 grid grid-cols-2 gap-6">
          <button
            className="btn btn-outline-warning border-2 border-warning px-4 py-2 justify-self-start"
            type="button"
            onClick={handleAddToCart}
          >
            🛒 Añadir
          </button>
          <Link
            to={`/pizza/${id}`}  // Usamos el id para redirigir a la página específica
            className="link btn-outline-warning border-2 border-warning px-4 py-2 justify-self-end"
          >
            Ver más...
          </Link>
        </div>
      </div>
    </div>
  );
}
