import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";

const Filters = ({ searchValue, houseOptions, updateCharacter, updateHouse }) => {
    return (
        <>
            <FilterByName searchValue={searchValue}
                updateCharacter={updateCharacter} />
            <FilterByHouse houseOptions={houseOptions}
                updateHouse={updateHouse} />
        </>
    )
}

export default Filters;

Filters.propTypes = {
    searchValue: PropTypes.string.isRequired,
    updateCharacter: PropTypes.func.isRequired,
    houseOptions: PropTypes.string.isRequired,
    updateHouse: PropTypes.func.isRequired,

}