import React from 'react';

export default function CardPizza({ objeto }) {
  const {
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

  return (
    <div className="card d-flex flex-column" style={{ width: '100%', maxWidth: '400px', height: '100%' }}>
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{desc}</p>
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

          <h5 className='preciocss mt-3'>
            {price ? `Precio: ${priceFormateado}` : 'Precio no encontrado'}
          </h5>
        </div>

        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-outline-warning border border-warning" type="button">
            👀 Ver más
          </button>
          <button className="btn btn-warning" type="button">
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
