import { useState, useEffect } from "react";
// import ls from "../services/localStorage";
import getCharacters from "../services/api";
import Filters from "../components/Filters";


const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [house, setHouse] = useState("");

  const houseOptions = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const updateCharacter = (ev) => {
    setSearchValue(ev.target.value);
  };

  const updateHouse = (ev) => {
    setHouse(ev.target.value);
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesHouse = house === "" || character.house === house;
    return matchesName && matchesHouse;
  })


  return (
    <>
      <h1>Harry Potter</h1>

      {/* Inputs de búsqueda */}
      <form>
        {/* <label htmlFor="characters">Busca por personaje </label>
        <FilterByName
          searchValue={searchValue}
          handleChangeCharacter={handleChangeCharacter}
        />

        <label htmlFor="house"> Selecciona la casa
          <FilterByHouse
            house={house}
            handleChangeHouse={handleChangeHouse}
          >
            <option value="">Todas las casas</option>
            {houseOptions.map((house) => {
              return (
                <option key={house} value={house}>{house}</option>
              )
            })}

          </select>
        </label> */}
      </form>

      <ul>
        {filteredCharacters.map((character, index) => {

          return (
            <li key={character.index}>
              <img src={character.picture || "https://placehold.co/250x250/transparent/F00"} alt="No picture" />
              <p>{character.name}</p>
              <p>{character.species}</p>
            </li>
          )
        })}

      </ul>
    </>
  );
};

export default HomePage;
