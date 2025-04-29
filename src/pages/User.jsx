import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { nombre } = useParams();

  return (
    <div>
      <h1 style={{ marginTop: '70px' }}>Hola {nombre}</h1>
    </div>
  );
}



