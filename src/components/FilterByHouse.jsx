import PropTypes from "prop-types";

const FilterByHouse = ({ house, updateHouse, houseOptions }) => {
    const handleChangeHouse = (ev) => {
        updateHouse(ev.target.value);
    };

    return (
        <form onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="house"> Choose your house
                <select
                    name="house"
                    id="house"
                    value={house}
                    onChange={handleChangeHouse}
                >
                    <option value="">All houses</option>
                    {houseOptions.map((houseName) => (

                        <option key={houseName} value={houseName}>{houseName}</option>

                    ))}

                </select>
            </label>
        </form>
    )
}

export default FilterByHouse;

FilterByHouse.propTypes = {

    house: PropTypes.string.isRequired,
    updateHouse: PropTypes.func.isRequired,
    houseOptions: PropTypes.arrayOf(PropTypes.string).isRequired,

}