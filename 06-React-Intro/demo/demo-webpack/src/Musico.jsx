import React from 'react';
// componente presentacional - recibe props y las muestra nada mas
function Musico({ name, lastname, band }) {
  return (
    <div>
      <h1>{name}, {lastname}</h1>
      <h2>{band}</h2>
    </div>
  )
};

export default Musico;