import React from 'react'
import Header from './Header'
import Intro from './Main'
import Eventlist from './Eventlist'


function Dashboard(props) {
  return (
    <div>
        <Header handleToday={props.handleToday} today ={props.today} handleAdd={props.handleAdd}/>
        <Intro data={{total:20,done:10,notdone:10}}/>
        <Eventlist  today={props.today}/>



    </div>
  )

}

export default Dashboard