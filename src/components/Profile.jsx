import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

 
  const user = {
    email: 'victor@concecptoweb.cl',
  };

  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Perfil de Usuario</h2>
      <p className="lead">Correo electrónico: <strong>{user.email}</strong></p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
