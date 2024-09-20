import React from "react";
import Saludo from "./Saludo";
import Producto from "./Producto";
import ContadorFuncional from "./ContadorFuncional";
import ContadorClase from "./ContadorClase";
import ListaDeProductos from "./ListaDeProductos";
import DetalleProducto from "./DetalleProducto";

export default function App() {
  const productos = [
    { nombreProducto: "Bandeja Paisa", precioProducto: "$25000" },
    { nombreProducto: "Arroz con pollo", precioProducto: "$18000" },
    { nombreProducto: "Hamburguesa", precioProducto: "$10000" },
  ];

  return (
    <>
      <div className="contenedorNombre">
        <Saludo nombre="Luisa Villacorte" />
      </div>

      <div className="contenedorPadre">
        <div className="card">
          <Producto nombreProducto="Manzana" precioProducto="$1500" />
        </div>

        <div className="card">
          <h1>Contadores en React</h1>
          <ContadorFuncional />
          <ContadorClase />
        </div>

        <div className="card">
          <h1>Villa Frutas</h1>
          <ListaDeProductos productos={productos} />
        </div>

        <div className="card">
          <h1>Detalles del Producto</h1>
          <DetalleProducto
            nombre="Bandeja Paisa"
            precio={"25000"}
            descripcion="Rica y deliciosa bandeja paisa para disfrutar en familia"
          />
        </div>
      </div>
    </>
  );
}
