import React, { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import "./checkinCheckout.css";

const CheckinCheckout = ({ calendar, setCalender }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  return (
    <>
      <div className="checkout-wrapper">
        <div className="checkin-checkout-container">
          <div
            className="date--range"
            onClick={() => {
              setIsDatePickerVisible(true);
            }}
          >
            <span>
              <i class="fa-regular fa-calendar"></i>
            </span>
            <div className="content">
              <span>Check in</span>
              {calendar?.checkin?.date ? (
                <div>
                  {calendar?.checkin?.day}, {calendar?.checkin?.date}
                </div>
              ) : (
                <p>-- / -- / ---</p>
              )}
            </div>
          </div>
          <span
            style={{
              width: "0.5px",
              height: "3rem",
              background: "rgb(173 163 163)",
            }}
          />
          <div
            className="date--range"
            onClick={() => {
              setIsDatePickerVisible(true);
            }}
          >
            <span>
              <i class="fa-regular fa-calendar"></i>
            </span>
            <div className="content">
              <span>Check out</span>
              {calendar?.checkout?.date ? (
                <div>
                  {calendar?.checkout?.day}, {calendar?.checkout?.date}
                </div>
              ) : (
                <p>-- / -- / ---</p>
              )}
            </div>
          </div>
        </div>
        {isDatePickerVisible ? (
          <div className="date-modal">
            <DatePicker
              setCalender={setCalender}
              setIsDatePickerVisible={setIsDatePickerVisible}
              type="Check in"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CheckinCheckout;
