import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); // metodo setCity es el que se usa para modificar (asignar un valor a algo)
  const handleInputChange = (e) => {  
    setCity(e.target.value)
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
