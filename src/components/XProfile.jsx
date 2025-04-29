import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, setUser, setUserToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setUserToken(false);
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="container text-center mt-5">
        <h2>Perfil de Usuario</h2>
        <p>Por favor, inicie sesión para ver su perfil.</p>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px', marginTop: '70px' }} >
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="Foto de perfil del usuario"
            className="rounded-circle mb-3"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h3 className="card-title">{user.username}</h3>
          <p className="text-muted">Web Developer</p>
          <p className="card-text">
            Apasionado por crear sitios web hermosos y funcionales. Siempre aprendiendo y explorando nuevas tecnologías.
          </p>
          <div className="d-flex justify-content-center gap-3 my-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fs-4 text-primary"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fs-4 text-info"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fs-4 text-primary"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fs-4 text-dark"></i>
            </a>
          </div>
          <button className="btn btn-outline-primary w-100 mb-3">
            Conectar
          </button>
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
