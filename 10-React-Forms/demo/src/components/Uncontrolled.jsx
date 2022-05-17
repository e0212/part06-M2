import React from 'react';

// formulario no controlado

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault(); // para que no recargue la pagina y perder los estados
    const username = document.querySelector('input[name=username]').value; // manipula el DOM
    const password = document.querySelector('input[name=password]').value;
    console.log(username, password); // SOLO LO CONSOLOGUEA, NO ENVIA NADA
  }
  
  // renderiza un form, con 2 input de usuario y clave, y otro input de un boton submit
  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete = "off">
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default Uncontrolled;