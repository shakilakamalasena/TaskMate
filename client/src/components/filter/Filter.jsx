import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState({
        serviceType: searchParams.get("serviceType") || "",
        city: searchParams.get("city") || "",
        minPrice: searchParams.get("minPrice") || 0,
        maxPrice: searchParams.get("maxPrice") || 10000000,
    });

    const handleChange = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        });
    };

    const handleFilter = () => {
        setSearchParams(query);
    };

    return (
        <div className="filter">
            <h1>
                Search results for <b>{searchParams.get("city")}</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City Location"
                        onChange={handleChange}
                        defaultValue={query.city}
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select
                        name="serviceType"
                        id="serviceType"
                        onChange={handleChange}
                        defaultValue={query.serviceType}
                    >
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
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                        onChange={handleChange}
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleFilter}>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Filter;
