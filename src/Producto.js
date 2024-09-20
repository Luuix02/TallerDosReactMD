import React from "react";

export default function Producto({ nombreProducto, precioProducto }) {
  return (
    <div>
      <h1>Productos</h1>
      <h3>Nombre: {nombreProducto}</h3>
      <p>Precio: {precioProducto}</p>
    </div>
  );
}
