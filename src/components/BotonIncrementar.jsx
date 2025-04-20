import React from 'react';

export default function BotonIncrementar({ incrementar }) {
  return (
    <button
      onClick={incrementar}
      className="btn btn-warning btn-lg rounded-2 shadow-sm fw-bold d-flex align-items-center justify-content-center border border-secondary"
      type="button"
      style={{ 
        padding: '0.5rem 2rem',
        transition: 'all 0.3s ease', // Suaviza la transición
      }}
    >
      <span>(+)</span>

      <style jsx>{`
        .btn-warning {
          transition: all 0.3s ease; /* Transición para todos los estados */
        }

        .btn-warning:hover {
          background-color: #e6b800;
          border-color: #d4a700;
          transform: scale(1.1); /* Aumenta el tamaño en hover para más impacto */
        }

        .btn-warning:focus {
          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
        }

        .btn-warning:active {
          transform: scale(0.95); /* Efecto de contraescala cuando se hace clic */
        }
      `}</style>
    </button>
  );
}
