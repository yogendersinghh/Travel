import React, { useState } from "react";
import "./searchBar.css";
import SearchCard from "./SearchCard";
const SearchBar = ({ setDestination, destination }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  return (
    <>
      <div className="search-container">
        <span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="input-label">
          <span className="label-name">Destination</span>
          <input
            type="text"
            placeholder="Where To?"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            onFocus={() => {
              setIsCardVisible(true);
            }}
            onBlur={() => {
              setIsCardVisible(false);
            }}
          />
        </span>
        <span
          onClick={() => {
            console.log("working");
            setDestination("");
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="search--card">
        {isCardVisible ? <SearchCard /> : null}
      </div>
    </>
  );
};

export default SearchBar;
