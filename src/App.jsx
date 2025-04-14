
import React from "react";
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Loginpage/Login"
import {useState} from "react"

function App() {
  let [isloggedin,setlogin]= useState(false)

  return  (
    <div  >
      {!isloggedin?<Login setlogin={setlogin}/>:<></>}
      {isloggedin?<Dashboard/>:<></>}
      <Link to="src/Loginpage/Login.jsx">jamaila</Link>
    </div>
  )
}

export default App
