import React, { useState } from 'react';

export default function Tareas() {
  const [listaTareas, setListaTareas] = useState([
    {
      id: 1,
      nombre: "Lavar el coche",
      completada: false,
    },
    {
      id: 2,
      nombre: "Hacer la compra",
      completada: false,
    },
    {
      id: 3,
      nombre: "Estudiar React",
      completada: true,
    },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleNuevaTarea = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;

    const nueva = {
      id: listaTareas.length + 1,
      nombre: nuevaTarea.trim(),
      completada: false,
    };

    setListaTareas([...listaTareas, nueva]);
    setNuevaTarea("");
  };

  const completarTarea = (id) => {
    const tareasActualizadas = listaTareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setListaTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasFiltradas = listaTareas.filter((tarea) => tarea.id !== id);
    setListaTareas(tareasFiltradas);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Lista de Tareas</h2>

          <form onSubmit={agregarTarea} className="d-flex mb-4">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Agregar nueva tarea..."
              value={nuevaTarea}
              onChange={handleNuevaTarea}
            />
            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>

          <ul className="list-group">
            {listaTareas.map((tarea) => (
              <li
                key={tarea.id}
                className={
                  tarea.completada
                    ? "list-group-item list-group-item-success text-decoration-line-through"
                    : "list-group-item"
                }
              >
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => completarTarea(tarea.id)}
                  className="me-2"
                />
                {tarea.nombre}
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
