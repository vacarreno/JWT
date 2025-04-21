import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarr() {
  const total = 25000;
  const precioFormateado = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  const token = false; // Cambia según estado de autenticación

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
              <Link className="btn btn-success mx-1 text-white" to="/">
                🍕 Home
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-success mx-1 text-white" to="/profile">
                    🔓 Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success mx-1 text-white" to="/logout">
                    🔒 Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-success mx-1 text-white" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success mx-1 text-white" to="/register">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center">
            <Link className="btn btn-danger mx-1" to="/cart">
              🛒 Total: {precioFormateado}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
