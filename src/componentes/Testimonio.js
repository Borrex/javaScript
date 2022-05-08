import React from "react";
import '../estilos/testimonio.css';

 export function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../imagenes/${props.imagen}.jpeg`)}
      alt={`foto de ${props.imagen}`}/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className="cargo-modelo">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-modelo">"{props.Testimonio}"</p>
      </div>
    </div>
  );

}
  
//export default Testimonio;