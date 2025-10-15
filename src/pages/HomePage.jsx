import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import getCharacters from "../services/api";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [house, setHouse] = useState("");

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleChangeCharacter = (ev) => {
    setCharacters(ev.target.value);
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
        <label htmlFor="characters">Busca por personaje </label>
        <input
          name="characters"
          id="characters"
          value={characters}
          onChange={handleChangeCharacter}
        />
        <label htmlFor="house"> Selecciona la casa</label>
        <select
          name="house"
          id="house"
          value={house}
          onChange={handleChangeHouse}
        >
          <option value="">Todas las casas</option>
          <option value="">Gryffindor</option>
          <option value="">Ravenclaw</option>
          <option value="">Slytherin</option>
        </select>

        return (
        <ul>
          {characters.map((character) => {

            return (
              <li key={character.id}>
                <img src={character.picture || "https://placehold.co/250x250/transparent/F00"} alt="No picture" />
                <p>{character.name}</p>
                <p>{character.species}</p>
              </li>
            )
          })}

        </ul>

      </form>
    </>
  );
};

export default HomePage;
