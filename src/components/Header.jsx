import React from 'react';

const Header = ({ backgroundImage }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '300px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '55px', // Esto bajará el header 13px
      }}
    >
      <div className="bg-dark bg-opacity-50 p-3 rounded">
        <h1 className="text-white fs-3 fw-bold mb-1">Pizzería Mamma Mía</h1>
        <h6 className="text-white fs-5 fw-bold">¡Tenemos la mejor Pizza!</h6>
      </div>
    </div>
  );
};

export default Header;


