import React from "react";
import { useEvents } from "../Data";
function Header(props) {
  let { isStudent } = useEvents();
  return (
    <div className="bg-[#640D5F] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="p-4 flex items-center">
          <img src="01_Logo.png" className="h-12 w-12" alt="logo" />
          <h1 className="text-2xl font-bold">Lakshya's Event Planner</h1>
        </div>

        <div className="space-x-2">
          <button
            onClick={() => {
              props.handleLogin(false);
            }}
            className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-4 py-1 rounded-md transition"
          >
            Logout
          </button>

          <button
            onClick={() => {
              props.handleToday(!props.today);
            }}
            className="bg-[#321922] hover:bg-[#EB5B00] text-white px-4 py-1 rounded-md transition"
          >
            Today
          </button>
          {!isStudent ? (
            <button
              onClick={() => {
                props.handleAdd(true);
              }}
              className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-4 py-1 rounded-md transition"
            >
              Add Events
            </button>
          ) : (
            <button
              onClick={() => {
                props.handleAdd(true);
              }}
              className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-4 py-1 rounded-md transition"
            >
              Propose Event
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
