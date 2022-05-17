import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {  // componente
  const modeloFamiliar = { nombre: '' };
  const [familiar, setFamiliar] = useState([ // paso 3 se modifica el estado, entonces provoca que se re-renderice el componente!
    { ...modeloFamiliar },
  ]);

  const [persona, setPersona] = useState({  // estado persona
    nombre: '',
  });

  const agregaFamiliar = () => { // paso 2... se ejecuta esta funcion
      setFamiliar([...familiar, { ...modeloFamiliar }]); // agrega un nuevo objeto al array del estado "familiar"
  };

  const handlePersonaChange = (e) => setPersona({
    ...persona,
    [e.target.name]: e.target.value,
  });

  const handleFamiliarChange = (e) => { // paso 7 ejecuta la funcion
    const familiares = [...familiar]; // copia de familiar [{nombre: "Ale"}]
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);// paso 8 cambia el estado familiar
  };
  // e (evento) es un objeto{           anidado que adentro tiene target,dataset, name
              // target:{
             //   dataset:{
             //   name:
            //    }
            //   }
            // }


  const handleSubmit = e => {
    e.preventDefault()
    console.log(familiar)
  }
   // paso 4 a partir de aca se vuelve a renderizar. // paso 9 se re-renderiza
  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}// paso 1 ... le dan click a este boton, se dispara la fn agregaFamiliar
      />
      
      {//   vuelve a mapear el array del estado familiar
      familiar.map((el, i) => ( // usa index en vez de keys
        <div key={`persona-${i}`}> {/*key que guarda react*/}
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange} // paso 6 si escribo algo en el input se dispara la fn handleFamiliarChange
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;