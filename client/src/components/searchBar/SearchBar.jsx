import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [query, setQuery] = useState({
        serviceType: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="searchBar">
            <form action="">
                <select name="serviceType" onChange={handleChange}>
                    <option value="">any</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Painting">Painting</option>
                    <option value="Gardening">Gardening</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Handyman">Handyman</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Locksmith">Locksmith</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Landscaping">Landscaping</option>
                </select>
                <input
                    type="text"
                    name="city"
                    placeholder="City Location"
                    onChange={handleChange}
                />

                <Link
                    to={`/list?serviceType=${query.serviceType}&city=${query.city}`}
                    className="searchButton"
                >
                    <img src="/search.png" alt="" />
                </Link>
            </form>
        </div>
    );
};

export default SearchBar;
