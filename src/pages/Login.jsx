import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { setUser, setUserToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMensajeError('');

    // Validaciones locales
    if (email.trim() === '' || contrasena.trim() === '') {
      setError(true);
      setMensajeError('Todos los campos son obligatorios.');
      return;
    }

    if (!validarEmail(email)) {
      setError(true);
      setMensajeError('Ingrese un email válido.');
      return;
    }

    if (contrasena.length < 6) {
      setError(true);
      setMensajeError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Envío al backend
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: contrasena }),
      });

      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data?.error || 'Error al iniciar sesión.');
      }

      // Guardar usuario y token
      setUser({ email });
      setUserToken(data.token);
      localStorage.setItem("user", JSON.stringify({ email }));
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      setError(true);
      setMensajeError(err.message);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 style={{ marginTop: '70px' }}>Login</h2>
      <p>Ingrese sus credenciales para ingresar al sistema.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="contrasena" className="form-label mt-3">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-100 mt-4">Iniciar sesión</button>

          {error && <p className="text-danger mt-2">{mensajeError}</p>}
        </div>
      </form>
    </div>
  );
}
