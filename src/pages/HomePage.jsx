import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import getCharacters from "../services/api";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";


const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState("");
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));

  const houseOptions = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data) || [];
        ls.set("characters", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateCharacter = (value) => {
    setNameFilter(value);
    ls.set("nameFilter", value);
  };

  const updateHouse = (value) => {
    setHouse(value);
  };

  return (
    <main className="main-page">
      <h1>Harry Potter Characters</h1>

      <Filters
        houseOptions={houseOptions}
        house={house}
        nameFilter={nameFilter}
        updateCharacter={updateCharacter}
        updateHouse={updateHouse}
      />
      <CharacterList
        characters={characters}
        nameFilter={nameFilter}
        house={house}
      />
    </main>
  );
};

export default HomePage;
