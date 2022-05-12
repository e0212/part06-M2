import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx'; // se mueve un nivel de anidacion - desde app.js a src ./src
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';

const musicos = [
  {
    name: 'John',
    lastname: 'Lennon',
    band: 'The Beatles'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

function App() { // definido como un componente funcional
  return (       // unico elemento
    <div> 
      <Saludo nombre='Soy Henry' lang='en'/>
      <SaludoFuncional nombre='Soy Henry' lang='es'/>
      <Musicos musicos={musicos} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));