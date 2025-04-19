
import React from "react";
import "./index.css"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import {useState} from "react"
import AddEvent from "./Pages/AddEvent";
import EditEvent from "./Pages/EditEvent";


function App() {
  let [isloggedin,setlogin]= useState(false)
  let [addmore,setaddmore] = useState(false)
  let [today,settoday] = useState(false)
  let [editing, setEditing] = useState(false);
  let [editIndex, setEditIndex] = useState(null);



  function log(isloggedin,addmore,today){
    if (addmore && isloggedin){
      return (<AddEvent setaddmore={setaddmore} addmore={addmore}/>)
    }else if (editing && isloggedin){
      return (<EditEvent eventIndex = {editIndex} cancelEdit = {()=>{setEditing(false)}} editing = {editing}/>)
      

    }else if(today && isloggedin){
      return (<Dashboard today={today} handleToday={settoday} handleAdd={setaddmore} setEditIndex={setEditIndex} handleEdit={setEditing}/>)
    }else if(isloggedin && !addmore && !today){
      return (<Dashboard today={today} handleToday={settoday} handleAdd={setaddmore} setEditIndex={setEditIndex} handleEdit={setEditing}/>)
    }else{
      return <Login setlogin={setlogin} />
    }
  }

  return  (
    <div  >
      {log(isloggedin,addmore,today)}
      
    </div>
  )
}

export default App
