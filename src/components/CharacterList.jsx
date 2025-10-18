import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, nameFilter, house }) => {
  const filtered = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const matchesHouse = house === "" || character.house === house;
    return matchesName && matchesHouse;
  });

  if (filtered.length === 0) {
    return (
      <div className="empty-message">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWRnbnBvN3ZoNzRhMjJxcjQxNndqZ3Y0ZGdzb29ienRjbjN0enFqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12AM4jjIyDJqCs/giphy.gif"
          alt="Dobby"
        />
        <p>
          Dobby does not know of a character with that name, sir. Dobby is very
          sorry.
        </p>
      </div>
    );
  }

  return (
    <section className="character-list">
      <ul className="character-list__grid">
        {filtered.map((character) => (
          
          <li key={character.id} className="character-list__item">
            <Link to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  nameFilter: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
};

export default CharacterList;
