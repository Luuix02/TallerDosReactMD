import React from "react";

export default function Saludo(props) {
  return (
    <div>
      <h1>Hola mi nombre es: {props.nombre}</h1>
    </div>
  );
}
