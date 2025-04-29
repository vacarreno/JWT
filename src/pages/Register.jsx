import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { setUser, setUserToken } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [validaContrasena, setValidaContrasena] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const navegar = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
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

    if (validaContrasena.trim() === '') {
      setError(true);
      setMensajeError('Confirme su contraseña.');
      return;
    }

    if (contrasena !== validaContrasena) {
      setError(true);
      setMensajeError('Las contraseñas no coinciden.');
      return;
    }

    // Si pasa las validaciones
    setError(false);
    setMensajeError('');

    // Crear el usuario
    const newUser = { username, email, role: 'admin' };

    // Guardar en el contexto y localStorage
    setUser(newUser);
    setUserToken(true);
    localStorage.setItem('user', JSON.stringify(newUser));

    // Redirigir a la página principal
    navegar("/");

    // Limpiar formulario
    setUsername('');
    setEmail('');
    setContrasena('');
    setValidaContrasena('');
  };

  return (
    <div className="container text-center mt-5">
      <h2 style={{ marginTop: '70px' }}>Formulario de Registro</h2>
      <p>Por favor, complete el formulario para registrarse.</p>

      <form onSubmit={handleSubmit} className="text-start mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">Nombre de Usuario</label>
          <input 
            type="text" 
            className="form-control"
            id="usernameInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contrasenaInput" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="contrasenaInput"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="validaContrasenaInput" className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="validaContrasenaInput"
            value={validaContrasena}
            onChange={(e) => setValidaContrasena(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Registrarse</button>

        {error && <p className="text-danger mt-2">{mensajeError}</p>}
      </form>
    </div>
  );
}
