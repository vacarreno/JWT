import React, { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import BotonIncrementar from '../components/BotonIncrementar';
import BotonDisminuir from '../components/BotonDisminuir';

export default function Cart() {
  const { cart, setCart, userToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  const incrementarCantidad = (id) => {
    const nuevoCart = cart?.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(nuevoCart);
  };

  const disminuirCantidad = (id) => {
    const nuevoCart = cart
      ?.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(nuevoCart);
  };

  const total = cart?.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0) || 0;
  const totalFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  const handlePay = () => {
    if (userToken) {
      alert('¡Compra realizada con éxito! 🎉');
    } else {
      alert('Debe iniciar sesión para realizar el pago.');
      navigate('/login');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ marginTop: '70px' }}>🛒 Carrito de Compras</h2>

      {!cart || cart.length === 0 ? (
        <div className="alert alert-info text-center fw-bold shadow-sm fs-4 py-4" role="alert">
          🛒 El carrito está vacío. ¡Agrega tu pizza favorita!
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg fw-bold shadow-sm"
              onClick={() => navigate('/')}
              type="button"
              style={{ transition: 'transform 0.3s ease' }}
            >
              🍕 Agregar Pizza
            </button>
          </div>
        </div>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-3 shadow-sm">
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

            <button
  className="btn btn-success btn-lg rounded-2 shadow-sm fw-bold d-flex align-items-center justify-content-center border border-secondary"
  type="button"
  style={{
    padding: '0.5rem 2rem',
    transition: 'all 0.3s ease',
    opacity: userToken ? 1 : 0.5,
    cursor: userToken ? 'pointer' : 'not-allowed',
  }}
  onClick={handlePay}
  disabled={!userToken} // ✅  Comentario normal fuera de las llaves
>
  <span>💳 Pagar</span>
</button>
          </div>
        </div>
      )}
    </div>
  );
}
