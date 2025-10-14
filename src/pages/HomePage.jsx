import { useState, useEffect } from "react";
import getCharacters from "../services/api";

const HomePage = () => {
  const [character, setCharacter] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    getCharacters().then((data) => {
        console.log(data);
        setCharacter (data);
      });
  }, []);

  const handleChangeCharacter = (ev) => {
    setCharacter(ev.target.value);
    console.log(ev.target.value);
  };

  const handleChangeHouse = (ev) => {
    setHouse(ev.target.value);
    console.log("Buscador casa");
  };

  return (
    <>
      <h1>Harry Potter</h1>

      <form>
        <label htmlFor="character">Busca por personaje </label>
        <input
          name="character"
          id="character"
          value={searchValue}
          onChange={handleChangeCharacter}
        />
        <label htmlFor="house"> Selecciona la casa</label>
        <select
          name="house"
          id="house"
          value={house}
          onChange={handleChangeHouse}
        >
          <option value="">Gryffindor</option>
        </select>
        <ul>
            <li key={character.id}>

            </li>
        </ul>
      </form>
    </>
  );
};

export default HomePage;
