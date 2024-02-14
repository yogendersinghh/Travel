import React from "react";

const Button = ({
  text,
  type,
  setData,
  setIsRoomCardVisible,
  calendar,
  destination,
  data,
}) => {
  return (
    <button
      type="submit"
      onClick={() => {
        console.log("type",type)
        if (type === "reset") {
          setData({
            Adults: 2,
            Children: 0,
            Rooms: 1,
            ChildrensAge: [],
            petFriendly: false,
          });
        } else if (type === "done") {
          console.log(
            "calendar , destination , data",
            calendar,
            destination,
            data
          );
        } else {
          setIsRoomCardVisible(false);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
