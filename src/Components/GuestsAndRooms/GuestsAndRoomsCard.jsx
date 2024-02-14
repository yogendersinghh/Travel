import React, { useState } from "react";
import Button from "../Button";
import ChildrensAge from "./ChildrensAge";

const GuestsAndRoomsCard = ({ setData, data, setIsRoomCardVisible }) => {
  return (
    <>
      <div className="guest-room-card">
        {["Adults", "Children", "Rooms"].map((val) => {
          return (
            <>
              <div className="guest-room-wrapper">
                <p>{val}</p>
                <div className="guest-room-number">
                  <button
                    name={val}
                    disabled={
                      val !== "Children" ? data[val] <= 1 : data[val] <= 0
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setData((prev) => ({
                        ...prev,
                        [e.target.name]: data[e.target.name] - 1,
                      }));
                    }}
                  >
                    -
                  </button>
                  <span>{data[val]}</span>
                  <button
                    name={val}
                    onClick={(e) => {
                      setData((prev) => ({
                        ...prev,
                        [e.target.name]: data[e.target.name] + 1,
                      }));
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <hr />
        <div className="children-age-wrapper">
          <div className="checkbox-wrapper" style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
            {data.Children > 0 && (
              <>
              <div>Children's ages (Required)</div>
                {Array.from({ length: data.Children }, (_, index) => {
                  return (
                    <>
                    
                      <ChildrensAge number={index} setData={setData} />
                    </>
                  );
                })}
              </>
            )}
          </div>
          <div className="checkbox-wrapper">
            <div className="checkbox-content">
              <h5>Pet-friendly</h5>
              <p>Only show stays that allow pets</p>
            </div>
            <input
              type="checkbox"
              checked={data.petFriendly}
              onClick={(event) => {
                setData((prev) => ({
                  ...prev,
                  petFriendly: event.target.checked,
                }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="Reset" type="reset" setData={setData} />
        <Button
          text="Apply"
          type="submit"
          setData={setData}
          setIsRoomCardVisible={setIsRoomCardVisible}
        />
      </div>
    </>
  );
};

export default GuestsAndRoomsCard;
