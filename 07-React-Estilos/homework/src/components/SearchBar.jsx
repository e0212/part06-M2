import React from "react";
import { BiSearchAlt, BiMapPin } from "react-icons/bi";

import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <form className={style.searchBar}>
      <BiMapPin className={style.icon} />
      <input className={style.input} placeholder="Ciudad..." />
      <button className={style.submit} type="submit">
        <BiSearchAlt />
      </button>
    </form>
  );
}
