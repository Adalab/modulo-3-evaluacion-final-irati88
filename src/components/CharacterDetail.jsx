import "react";
import PropTypes from "prop-types";

const CharacterDetail = ({ character }) => {
  return (
    <>
      <img
        src={
          character.picture || "https://placehold.co/250x250/transparent/F00"
        }
        alt="No picture"
      />
      <p>{character.name}</p>
      <p>{character.species}</p>
    </>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};
