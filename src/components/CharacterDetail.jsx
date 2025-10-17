import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {

  return (
    <section className="character-detail">
      <img className="character-detail__image"
        src={
          character.picture || "https://placehold.co/200x250?text=No+Image"
        }
        alt={character.name}
      />
      <div className="character-detail__info">
      <p>{character.name}</p>
      <p>{character.species}</p>
      </div>
    </section>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string,
    species: PropTypes.string,
  }).isRequired,
};

export default CharacterDetail;
