import PropTypes from "prop-types";

const FilterByHouse = ({ house, updateHouse, houseOptions }) => {
  const handleChangeHouse = (ev) => {
    updateHouse(ev.target.value);
  };

  return (
    <div className="filter filter-house">
      <label htmlFor="house">Choose your house:</label>
        <select
          name="house"
          id="house"
          value={house}
          onChange={handleChangeHouse}
        >
          <option value="">All houses</option>
          {houseOptions.map((houseName) => (
            <option key={houseName} value={houseName}>
              {houseName}
            </option>
          ))}
        </select>
    </div>
  );
};

FilterByHouse.propTypes = {
  house: PropTypes.string.isRequired,
  updateHouse: PropTypes.func.isRequired,
  houseOptions: PropTypes.array.isRequired,
};

export default FilterByHouse;