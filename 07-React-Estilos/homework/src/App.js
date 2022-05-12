import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </header>
      <main className={style.main}>
        <section className={style.mainCity}>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
            main={true}
          />
        </section>
        <section className={style.reelCities}>
          <Cards cities={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
