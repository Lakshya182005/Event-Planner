
import React from "react";
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Loginpage/Login"
import {useState} from "react"
import AddEvent from "./Dashboard/AddEvent";

function App() {
  let [isloggedin,setlogin]= useState(false)
  let [addmore,setaddmore] = useState(false)
  let [today,settoday] = useState(false)

  function log(isloggedin,addmore,today){
    if (addmore && isloggedin){
      return (<AddEvent setaddmore={setaddmore} addmore={addmore}/>)
    }else if(today && isloggedin){
      return (<Dashboard today={today} handleToday={settoday} handleAdd={setaddmore} />)
    }else if(isloggedin && !addmore && !today){
      return (<Dashboard today={today} handleToday={settoday} handleAdd={setaddmore}/>)
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
