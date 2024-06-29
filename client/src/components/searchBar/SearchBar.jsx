import "./searchBar.scss";

const SearchBar = () => {
    return (
        <div className="searchBar">
            <form action="">
                <select name="type" id="type">
                    <option value="0">Service Type</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="plumber">Plumber</option>
                    {/* to be added */}
                </select>
                <input
                    type="text"
                    name="location"
                    placeholder="City Location"
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
