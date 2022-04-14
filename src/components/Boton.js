import React from "react";
import "../css/Botos.css";

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={this.props.manejarClick}
      >
        {this.props.texto}
      </button>
    );
  }
}

export { Boton };
