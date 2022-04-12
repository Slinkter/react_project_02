import React from "react";
import "../css/Botos.css"

function Boton({ texto, esBotonDeClic, manejarClick }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export { Boton };
