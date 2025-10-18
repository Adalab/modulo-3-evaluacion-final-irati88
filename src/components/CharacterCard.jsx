import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  const { picture, name, species, gender } = character;
  const placeholder = "https://placehold.co/200x250?text=No+Image";

  return (
    
    <article className="character-card">
      <img
        className="character-card__image"
        src={picture || placeholder}
        alt={name ? `Picture of ${name}` : "Picture of the character"}
      />
      <div className="character-card__info">
        <h3 className="character-card__name">{name}</h3>
        <p className="character-card__species">Species: {species}</p>
        <p className="character-card__gender">Gender: {gender}</p>
      </div>
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    species: PropTypes.string,
    gender: PropTypes.string,
    alive: PropTypes.bool,
  }).isRequired,
};

export default CharacterCard;
