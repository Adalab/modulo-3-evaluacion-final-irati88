import PropTypes from "prop-types";

const FilterByName = ({searchValue, updateCharacter}) => {
    const handleChangeCharacter = (ev) => {
        updateCharacter(ev.target.value);
    };

    return (
        <form onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="characters">Find your favourite character </label>
            <input
                name="characters"
                id="characters"
                value={searchValue}
                placeholder="P.e. Harry Potter"
                onChange={handleChangeCharacter}
            />
        </form>
    )
}

export default FilterByName;

FilterByName.propTypes = {
searchValue: PropTypes.string.isRequired,
updateCharacter: PropTypes.func.isRequired,
}