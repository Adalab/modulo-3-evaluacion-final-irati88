import PropTypes from "prop-types";

const FilterByName = ({ nameFilter, updateCharacter }) => {
  const handleChangeCharacter = (ev) => {
    updateCharacter(ev.target.value);
  };

  return (
     <div className="filter filter-name">
      <label htmlFor="characters">Find your favourite character: </label>
      <input
        name="nameFilter"
        id="nameFilter"
        value={nameFilter}
        placeholder="Voldemort, Dumbledore ..."
        onChange={handleChangeCharacter}
      />
    </div>
  );
};

FilterByName.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  updateCharacter: PropTypes.func.isRequired,
};

export default FilterByName;
