import React, { useState } from 'react';

// formulario controlado

export default function Form() {  // aca pongo los estados en el componente (en este caso tiene 3)
  const [username, setUsername] = useState(''); // estado para el usuario
  const [password, setPassword] = useState('');// estado para la contraseña
  const [error, setError] = useState('');// estado para el error
  const [err, setErrPass] = useState('');// estado para el error de pass

// FUNCIONES Y METODOS
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }



  function validatePass(value){

    if(/^(?=.*\d).{8,}$/.test(value)) {
      setErrPass('la pass debe tener 8 caracteres');
    } else {
      setErrPass('');
    }
    setPassword(value);
  }


  // INTERFAZ GRAFICA (LO QUE SE VE)
  return (
      <form autoComplete='off'>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}

        <br/>  {/*salto de linea  */}

        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => validatePass(e.target.value)}/>
        {!err ? null : <span>{err}</span>}

        <input type="submit" />
      </form>
    );
}