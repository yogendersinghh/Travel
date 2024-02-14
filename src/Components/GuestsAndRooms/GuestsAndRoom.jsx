import Button from "../Button";
import GuestsAndRoomsCard from "./GuestsAndRoomsCard";
import React, { useState } from "react";

const GuestsAndRoom = ({ setData, data }) => {
  const [isRoomsCardVisible, setIsRoomCardVisible] = useState(false);
  return (
        <>
    <div className="guest-room-wrapper">
        <div className="room-wrapper">
          <span>
            <i class="fa-solid fa-bed"></i>
          </span>
          <button
            onFocus={() => {
              setIsRoomCardVisible(true);
            }}
          >
            <span>Guests And Rooms</span>
            <div>
              {data?.Adults + data?.Children} Guest, {data?.Rooms} Room
            </div>
          </button>
         
        </div>
        {isRoomsCardVisible && (
          <div className="room-card">
            <GuestsAndRoomsCard
              setIsRoomCardVisible={setIsRoomCardVisible}
              setData={setData}
              data={data}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GuestsAndRoom;
