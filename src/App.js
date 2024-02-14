import React, { useState } from "react";
import CheckinCheckout from "./Components/CheckinChekout/CheckinCheckout";
import GuestsAndRoom from "./Components/GuestsAndRooms/GuestsAndRoom";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css";
import Button from "./Components/Button";

const App = () => {
  const [destination, setDestination] = useState("");
  const [calendar, setCalendar] = useState({
    checkin: {
      day: "",
      date: "",
    },
    checkout: {
      day: "",
      date: "",
    },
  });

  const [data, setData] = useState({
    Adults: 2,
    Children: 0,
    Rooms: 1,
    ChildrensAge: [],
    petFriendly: false,
  });
  return (
    <>
      <div className="wrapper">
        <div className="header-wrapper">
          <SearchBar
            setDestination={setDestination}
            destination={destination}
          />
          <CheckinCheckout setCalender={setCalendar} calendar={calendar} />
          <GuestsAndRoom setData={setData} data={data} />
        </div>
          <div className="submit-button">
            <Button
              text="Submit"
              type="done"
              calendar={calendar}
              destination={destination}
              data={data}
            />
          </div>
      </div>
    </>
  );
};

export default App;
