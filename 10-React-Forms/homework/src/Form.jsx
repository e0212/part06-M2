import React from 'react';



export function validate(input) {
  let errors = {};
  if (!input.username) { // sino tengo username
    errors.username = 'Username is required'; // se lo asigna a errors {} como un cartel "Username is..."
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) { // sino tengo password
    errors.password = 'Password is required'; // se lo asigna a errors {} como un cartel "Password is..."
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
    return errors;
};



export default function  Form() {// aca manejamos los estados
//  const [username, setUsername] = React.useState('')
//  const [password, setPassword] = React.useState('')

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });


  const [errors, setErrors] = React.useState({});


  const handleInputChange = function(e) {
    setInput({
      ...input,// spread operator, copia del estado anterior
      [e.target.name]: e.target.value // actualiza el valor de la propiedad username o password
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }



  return (
    <form autoComplete='off'>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
        type="text" name="username" value={input.username} onChange={handleInputChange}/>
        
        {errors.username && 
        <p className="danger">{errors.username}</p>
        }

      </div>

      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
        type="password" name="password" value={input.password} onChange={handleInputChange}/>

        {errors.password && 
        <p className="danger">{errors.password}</p>
        }


      </div>
      <button>Enviar</button>

    </form>
  )
}
