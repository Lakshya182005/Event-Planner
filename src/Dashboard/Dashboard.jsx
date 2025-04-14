import React from 'react'
import Header from './Header'
import Intro from './Main'
import Eventlist from './Eventlist'
import { Link, Router } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Header/>
        <Intro data={{total:20,done:10,notdone:10}}/>
        <Eventlist/>
        <Router>
        <Link to="src/Loginpage/Login.jsx">jamaila</Link>
        </Router>


    </div>
  )

}

export default Dashboard