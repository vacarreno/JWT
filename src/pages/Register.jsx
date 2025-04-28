import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { setUser, setUserIsLogged } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [validacontrasena, setValidaContrasena] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      setError(true);
      setMensajeError('Ingrese un nombre de usuario.');
      return;
    }

    if (email.trim() === '' || !validarEmail(email)) {
      setError(true);
      setMensajeError('Ingrese un email válido.');
      return;
    }

    if (contrasena.trim() === '') {
      setError(true);
      setMensajeError('Ingrese una contraseña.');
      return;
    }

    if (contrasena.length < 6) {
      setError(true);
      setMensajeError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (validacontrasena.trim() === '') {
      setError(true);
      setMensajeError('Confirme su contraseña.');
      return;
    }

    if (contrasena !== validacontrasena) {
      setError(true);
      setMensajeError('Las contraseñas no coinciden.');
      return;
    }

    setError(false);
    setMensajeError('');

    const newUser = { username, email };
    setUser(newUser);
    setUserIsLogged(true);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/");

    setUsername('');
    setEmail('');
    setContrasena('');
    setValidaContrasena('');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Formulario de Registro</h2>
      <p>Por favor, complete el formulario para registrarse.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">Nombre de Usuario</label>
          <input 
            type="text" 
            className="form-control"
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="emailInput" className="form-label mt-3">Email:</label>
          <input 
            type="email" 
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="contrasena" className="form-label mt-3">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <label htmlFor="validacontrasena" className="form-label mt-3">Confirmar Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="validacontrasena"
            value={validacontrasena}
            onChange={(e) => setValidaContrasena(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-100 mt-4">Registrarse</button>

          {error && <p className="text-danger mt-2">{mensajeError}</p>}
        </div>
      </form>
    </div>
  );
}
