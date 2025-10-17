import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

const Filters = ({ houseOptions, house, nameFilter, updateCharacter, updateHouse,}) => {
  return (
    <section className="filters">
      <FilterByName 
      nameFilter={nameFilter} 
      updateCharacter={updateCharacter} 
      />

      <FilterByHouse
        house={house}
        houseOptions={houseOptions}
        updateHouse={updateHouse}
      />
    </section>
  );
};

export default Filters;

Filters.propTypes = {
  house: PropTypes.string.isRequired,
  houseOptions: PropTypes.array.isRequired,
  updateCharacter: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};
