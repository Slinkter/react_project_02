import "./App.css";
// Hook usesState
import { useState } from "react";
import logogya from "./imagenes/header.png";
import { Boton } from "./components/Boton";
import { Contador } from "./components/Contador";

function App() {
  // uso de Hooks , son funciones especiales
  // 1.UseState , agrega un estado a un componente
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logogya}
          alt="logo de freecode"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto={"click"}
          esBotonDeClic={true}
          manejarClick={manejarClic}
        ></Boton>

        <Boton
          texto={"Reiniciar"}
          esBotonDeClic={false}
          manejarClick={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
