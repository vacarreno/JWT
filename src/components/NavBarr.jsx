import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext'; // Importar el contexto global

export default function NavBarr() {
  // Acceder al contexto
  const { userToken, cart, user, setUser, setUserToken } = useContext(GlobalContext);
  const navegar = useNavigate();

  const handleLogout = () => {
    setUser(null); // Limpiar el usuario
    localStorage.removeItem("user"); // Eliminar el usuario de localStorage 
    setUserToken(false);
    navegar("/"); // Cambiar el estado de autenticación
  }

  // Calcular el total del carrito tomando en cuenta las cantidades de las pizzas
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  const precioFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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

        <NavLink className="navbar-brand" to="/">
          Pizzería Mamma Mía!
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "btn btn-outline-success mx-2" : "btn btn-outline-danger mx-2"} 
                to="/"
              >
                🍕 Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "btn btn-outline-success mx-2" : "btn btn-outline-danger mx-2"} 
                to="/cart"
              >
                🍕 Cart
              </NavLink>
            </li>

            {!userToken ? (
              <>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => isActive ? "btn btn-outline-success mx-2" : "btn btn-outline-danger mx-2"} 
                    to="/login"
                  >
                    🔐 Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => isActive ? "btn btn-outline-success mx-2" : "btn btn-outline-danger mx-2"} 
                    to="/register"
                  >
                    🔐 Registro
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  🔓 Perfil
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                        alt="user" 
                        width="30px" 
                        height="30px" 
                        style={{ borderRadius: "100%" }} 
                        className="me-2"
                      />
                      {user?.username}
                    </NavLink>
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
            
            {userToken && (
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => isActive ? "btn btn-outline-success mx-2" : "btn btn-outline-danger mx-2"} 
                  to="/admin"
                >
                  📜 Admin Panel
                </NavLink>  
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center">
            <NavLink className="btn btn-danger mx-2" to="/cart">
              🛒 Total: {precioFormateado}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Ícono fijo en la parte inferior derecha */}
      <NavLink to="/cart" className="btn btn-outline-warning position-fixed bottom-0 end-0 m-3">
        🛒
      </NavLink>
    </nav>
  );
}
