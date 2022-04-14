import "./App.css";
// Hook usesState
import React from "react";
import logogya from "./imagenes/header.png";
import { Boton } from "./components/Boton";
import { Contador } from "./components/Contador";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };

    this.manejarClic= this.manejarClic.bind(this)
    this.reiniciarContador = this.reiniciarContador.bind(this)

  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
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
          <Contador numClics={this.state.numClics} />
          <Boton
            texto={"click"}
            esBotonDeClic={true}
            manejarClick={this.manejarClic}
          ></Boton>

          <Boton
            texto={"Reiniciar"}
            esBotonDeClic={false}
            manejarClick={this.reiniciarContador}
          ></Boton>
        </div>
      </div>
    );
  }
}

export default App;
