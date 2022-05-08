import './App.css';
import {Testimonio} from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
    <h1>datos curiosos sobre gatos que encontre en internet:</h1>
    <Testimonio 
    nombre = 'federico'
    pais ='italia'
    imagen='gato1'
    cargo='fisiculturista'
    empresa='mysterOlympia'
    Testimonio='A diferencia de los perros, los gatos no suelen aceptar que los disfraces, te decimos por qué no se sienten cómodos con esta acción'/>
    <Testimonio 
    nombre = 'max'
    pais ='francia'
    imagen='gato2'
    cargo='boxeador'
    empresa='WWE'
    Testimonio='Para los gatos ningún juguete en el mundo, no importa cuán caro o elegante sea, se compara con una simple caja de cartón.'/>

<Testimonio 
    nombre = 'clwon'
    pais ='Mexico'
    imagen='gato3'
    cargo='emprendedor'
    empresa='clwon'
    Testimonio='Desde golpes de cabeza hasta maullidos, ¡descubre cómo tu gato muestra afecto y amor por ti!'/>
    
    
    </div>
       </div>
  );
}

export default App;
