import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {
  const house = character.house ? character.house : "Unknown";

  return (
    <section className="character-detail">
      <h1>Harry Potter Characters</h1>
      <img
        className="character-detail__image"
        src={character.picture || "https://placehold.co/200x250?text=No+Image"}
        alt={character.name}
      />
      <div className="character-detail__info">
        <p>Name: {character.name}</p>
        <p>House: {house}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p
          className={`character-card__status ${
            character.alive ? "alive" : "dead"
          }`}
        >
          {character.alive ? "💚 Alive" : "☠ Dead"}
        </p>
      </div>
    </section>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string,
    species: PropTypes.string,
    house: PropTypes.string,
    gender: PropTypes.string,
    alive: PropTypes.bool,
  }).isRequired,
};

export default CharacterDetail;
