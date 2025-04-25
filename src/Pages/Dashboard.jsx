import React from "react";
import Header from "../components/Header";
import Eventlist from "../components/Eventlist";

function Dashboard(props) {
  return (
    <div>
      <Header
        handleToday={props.handleToday}
        today={props.today}
        handleAdd={props.handleAdd}
        handleLogin={props.handleLogin}
      />
      <Eventlist
        today={props.today}
        setEditIndex={props.setEditIndex}
        handleEdit={props.handleEdit}
      />
    </div>
  );
}

export default Dashboard;
