import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setMensajeError('');
    setMensajeExito('');
    setError(false);

    
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

    // Si pasa todas las validaciones
    setMensajeExito('¡Inicio de sesión exitoso!');
    setEmail('');
    setContrasena('');
  };

  return (

    <div className="container text-center mt-12">
                    <h2 className="text-center mt-4">Login</h2>
                    <p className="text-center mt-4">Ingrese sus credenciales para ingresar al sistema.</p>
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
        <br />

        <label htmlFor="contrasena" className="form-label">Contraseña:</label>
        <input
          type="password"
          className="form-control"
          id="contrasena"
          placeholder="Ingrese su contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <br />

        <button type="submit" className="btn btn-primary">Iniciar sesión</button>

        {error && <p className="text-danger mt-2">{mensajeError}</p>}
        {mensajeExito && <p className="text-success mt-2">{mensajeExito}</p>}
      </div>
    </form>
    </div>
  );
}
