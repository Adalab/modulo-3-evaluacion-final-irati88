import { useState, useEffect } from "react";
// import ls from "../services/localStorage";
import getCharacters from "../services/api";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState("Gryffindor");
  const [nameFilter, setNameFilter] = useState("");

  const houseOptions = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateCharacter = (value) => {
    setNameFilter(value);
  };

  const updateHouse = (value) => {
    setHouse(value);
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const matchesHouse = house === "" || character.house === house;
    return matchesName && matchesHouse;
  });

  return (
    <>
      <h1>Harry Potter</h1>

      <Filters
        characters={characters}
        houseOptions={houseOptions}
        house={house}
        updateCharacter={updateCharacter}
        updateHouse={updateHouse}
        nameFilter={nameFilter}
      />

      {filteredCharacters.length === 0 ? (
        <div>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWRnbnBvN3ZoNzRhMjJxcjQxNndqZ3Y0ZGdzb29ienRjbjN0enFqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12AM4jjIyDJqCs/giphy.gif"
            alt="Dobby"
          />
          <p>
            Dobby does not know of a character with that name, sir. Dobby is
            very sorry.
          </p>
        </div>
      ) : (
        <CharacterList characters={filteredCharacters} />
      )}
    </>
  );
};

export default HomePage;
