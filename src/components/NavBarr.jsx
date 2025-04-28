import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext'; // Importar el contexto global

export default function NavBarr() {
  // Acceder al contexto
  const { userIsLogged, cart, user, setUser, setUserIsLogged } = useContext(GlobalContext);
  const navegar = useNavigate();

  const handleLogout = () => {
    setUser(null); // Limpiar el usuario
    localStorage.removeItem("user"); // Eliminar el usuario de localStorage 
    setUserIsLogged(false);
    navegar("/"); // Cambiar el estado de autenticación
  }

  // Calcular el total del carrito tomando en cuenta las cantidades de las pizzas
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  const precioFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample"
          aria-controls="navbarExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía!
        </Link>

        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-outline-success mx-2" to="/">
                🍕 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success mx-2" to="/cart">
                🍕 Cart
              </Link>
            </li>

            {!userIsLogged ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary mx-2" to="/login">
                  🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary mx-2" to="/register">
                  🔐 Registro
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  🔓 Perfil
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                        alt="user" 
                        width="30px" 
                        height="30px" 
                        style={{ borderRadius: "100%" }} 
                        className="me-2"
                      />
                      {user?.username}
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <b>Cerrar sesión</b> 
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center">
            <Link className="btn btn-danger mx-2" to="/cart">
              🛒 Total: {precioFormateado}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
