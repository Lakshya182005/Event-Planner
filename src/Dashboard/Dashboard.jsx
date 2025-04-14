import React from 'react'
import Header from './Header'
import Intro from './Main'
import Eventlist from './Eventlist'


function Dashboard(props) {
  return (
    <div>
        <Header checkToday={props.handleToday} today ={props.today} checkAdd={props.handleAdd}/>
        <Intro data={{total:20,done:10,notdone:10}}/>
        <Eventlist  today={props.today}/>



    </div>
  )

}

export default Dashboard