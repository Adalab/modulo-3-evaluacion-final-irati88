import "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";

const CharacterList = ({ characters }) => {

 if (characters.length === 0) {
    return <p>Dobby does not know of a character with that name, sir. Dobby is very sorry.</p>;
  }

  return (
    <section className="character-list">
      <ul className="character-list__grid">
        {characters.map((character, index) => (
          <li key={index} className="character-list__item">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;