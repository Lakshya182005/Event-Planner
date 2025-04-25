import React from "react";

function Intro(props) {
  return (
    <div className="flex justify-between p-4 bg-[#FFB200] text-[#640D5F] rounded-lg m-4">
      <div className="font-bold">Total Events: {props.data.total}</div>
      <div className="font-bold">Events Open: {props.data.open}</div>
    </div>
  );
}

export default Intro;
