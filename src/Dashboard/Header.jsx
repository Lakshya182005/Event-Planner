import React from 'react';
function Header(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <img src="src/Assets/01_Logo.png" style={{ height: "2rem", width: "2rem" }} alt="logo" />

        
        

        <div>
          <button onClick={()=>{props.handleToday(!props.today)}}>Today</button>
          <button onClick={()=>{props.handleAdd(true)}}>Add Events</button>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <h1>Lakshya's Event Planner</h1>
      </div>
      
    </div>
  );
}

export default Header;
