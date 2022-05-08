import React from "react";
import '../estilos/Boton.css';

function Boton({ texto, esbotonclick, manejarClic }) {
    return(
      <button className={ esbotonclick ? "boton-clic" : "boton-reiniciar" }
      onClick={manejarClic}>
        {texto}
         </button>
    )
}
export default Boton;