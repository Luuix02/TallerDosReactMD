import React from "react";
import Producto from "./Producto";

const ListaDeProductos = ({ productos }) => {
  return (
    <div>
      {productos.map((producto, index) => (
        <Producto
          key={index}
          nombreProducto={producto.nombreProducto}
          precioProducto={producto.precioProducto}
        />
      ))}
    </div>
  );
};

export default ListaDeProductos;
