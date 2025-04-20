import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [validacontrasena, setValidaContrasena] = useState('');
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    alert('Formulario enviado con éxito 🎉');

    
    setEmail('');
    setContrasena('');
    setValidaContrasena('');
  };

  return (
    <div className="container text-center mt-12">
                    <h2 className="text-center mt-4">Formulario de Registro</h2>
                    <p className="text-center mt-4">Por favor, complete el formulario para registrarse.</p>
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

        <label htmlFor="validacontrasena" className="form-label">Confirmar contraseña:</label>
        <input
          type="password"
          className="form-control"
          id="validacontrasena"
          placeholder="Repita su contraseña"
          value={validacontrasena}
          onChange={(e) => setValidaContrasena(e.target.value)}
        />
        <br />

        <button type="submit" className="btn btn-primary">Enviar</button>

        {error && (
          <p className="text-danger mt-2">{mensajeError}</p>
        )}
      </div>
    </form>
    </div>
  );
}
