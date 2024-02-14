import React from "react";

const SearchCard = () => {
  const searchedAreas = [
    {
      hotelName: "abc",
      cityName: "delhi",
      country: "india",
    },
    {
      hotelName: "xyz",
      cityName: "delhi",
      country: "india",
    },
    {
      hotelName: "hotel 1",
      cityName: "delhi",
      country: "india",
    },
    {
      hotelName: "hotel 2",
      cityName: "delhi",
      country: "india",
    },
    {
      hotelName: "hotel 3",
      cityName: "delhi",
      country: "india",
    },
  ];
  return (
    <>
      <div className="card-heading">
        <h2>Places you recently searched</h2>
      </div>
      <div className="list">
        {searchedAreas.map((val) => {
          return <SearchedAreas individualAreaData={val} />;
        })}
      </div>
    </>
  );
};

const SearchedAreas = ({ individualAreaData }) => {
  return (
    <>
      <div className="list-item">
        <span>
          <i class="fa-solid fa-location-dot"></i>
        </span>
        <div className="city--name">
          <span>{individualAreaData.hotelName}</span> <br />
          <span>
            City . {individualAreaData.cityName}, {individualAreaData.country}
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
