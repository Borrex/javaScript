import './App.css';
import logo from './imagenes/logo.jpg';
import Boton from './componentes/Boton';
import Contador  from './componentes/contador';
import { useState } from 'react';

 function App() {
   const [numClic, setNumClics] = useState(0); 

  const manejarClic = () =>{
  
setNumClics(numClic + 1);
  }

  const reiniciarContador = () =>{
   setNumClics(0);

  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logo}
        alt='logo'/>
      </div>
      
      <div className='contenedor-contador'>
      <Contador 
      numClic={numClic} />
      <Boton 
      texto='clic'
      esbotonclick={true}
      manejarClic={manejarClic} />

      <Boton  texto='Reiniciar'
      esbotonclick={false}
      manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
