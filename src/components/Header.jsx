import React from 'react';
function Header(props) {
  return (
    <div className="bg-[#640D5F] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
      <div className="p-4 flex items-center">
      <img src="01_Logo.png" className="h-15 w-15"  alt="logo" />
      <h1 className="text-2xl font-bold">Lakshya's Event Planner</h1>
      
      </div>
        

        
        

        <div className="space-x-2">
          <button onClick={()=>{props.handleToday(!props.today)}} className="bg-[#321922] hover:bg-[#EB5B00] text-white px-4 py-1 rounded-md transition">
          Today
          </button>
          <button onClick={()=>{props.handleAdd(true)}} className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-4 py-1 rounded-md transition">
          Add Events
          </button>
        </div>
      </div>
      
      
    </div>
  );
}

export default Header;
