import React from "react";
import "../css/Contador.css"

function Contador(props) {
  return <div className="contador">{props.numClics}</div>;
}

export {Contador} ;
