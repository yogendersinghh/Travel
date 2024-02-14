import React, { useEffect } from "react";

const ChildrensAge = ({ number, setData }) => {
  return (
    <>
      <div>
      <span>Child {number}</span>
      <select
        name={number}
        onChange={(event, data) => {
          setData((prev) => {
            const updatedChildrensAge = [...prev.ChildrensAge];
            const childIndex = updatedChildrensAge.findIndex(
              (child) => Object.keys(child)[0] === `child ${number}`
            );
            if (childIndex !== -1) {
              updatedChildrensAge[childIndex] = {
                [`child ${number}`]: event.target.value,
              };
            } else {
              updatedChildrensAge.push({
                [`child ${number}`]: event.target.value,
              });
            }

            return {
              ...prev,
              ChildrensAge: updatedChildrensAge,
            };
          });
        }}
      >
        {Array.from({ length: 18 }, (_, index) => {
          return <option  value={index}>{index}</option>;
        })}
      </select>
      </div>
      </>
  );
};

export default ChildrensAge;
