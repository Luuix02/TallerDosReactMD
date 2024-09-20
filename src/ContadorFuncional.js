import React, { useState } from "react";

const ContadorFuncional = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h2>Contador Funcional: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default ContadorFuncional;
