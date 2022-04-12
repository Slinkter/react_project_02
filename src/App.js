import "./App.css";
import logogya from "./imagenes/header.png";
import { Boton } from "./components/Boton";

import { Contador } from "./components/Contador";

function App() {
  //
  const manejarClic = () => {
    console.log("Hola soy clic");
  };

  const reiniciarContador = () => {
    console.log("reiniciar");
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
        <Contador numClics={5} />
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
