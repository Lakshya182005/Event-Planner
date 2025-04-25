import React from "react";
import "./index.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { useState } from "react";
import AddEvent from "./Pages/AddEvent";
import EditEvent from "./Pages/EditEvent";
import { useEvents } from "./Data";
import ProposeEvent from "./Pages/ProposeEvent";

function App() {
  let [isloggedin, setlogin] = useState(false);
  let [addmore, setaddmore] = useState(false);
  let [today, settoday] = useState(false);
  let [editing, setEditing] = useState(false);
  let [editIndex, setEditIndex] = useState(null);
  let { isStudent } = useEvents();
  

  function log(isloggedin, addmore, today) {
    if (addmore && isloggedin && isStudent) {
      return <ProposeEvent setaddmore={setaddmore} addmore={addmore} />;
    } else if (addmore && isloggedin && !isStudent) {
      return <AddEvent setaddmore={setaddmore} addmore={addmore} />;
    } else if (editing && isloggedin) {
      return (
        <EditEvent
          eventIndex={editIndex}
          cancelEdit={() => {
            setEditing(false);
          }}
          editing={editing}
        />
      );
    } else if (today && isloggedin) {
      return (
        <Dashboard
          today={today}
          handleToday={settoday}
          handleAdd={setaddmore}
          setEditIndex={setEditIndex}
          handleEdit={setEditing}
          handleLogin={setlogin}
        />
      );
    } else if (isloggedin && !addmore && !today) {
      return (
        <Dashboard
          today={today}
          handleToday={settoday}
          handleAdd={setaddmore}
          setEditIndex={setEditIndex}
          handleEdit={setEditing}
          handleLogin={setlogin}
        />
      );
    } else {
      return <Login setlogin={setlogin} />;
    }
  }

  return <div>{log(isloggedin, addmore, today)}</div>;
}

export default App;
