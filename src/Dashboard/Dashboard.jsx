import React from 'react'
import Header from './Header'
import Eventlist from './Eventlist'

function Dashboard(props) {
  return (
    <div>
        <Header 
            handleToday={props.handleToday} 
            today={props.today} 
            handleAdd={props.handleAdd} 
        />
        <Eventlist today={props.today} />
    </div>
  )
}

export default Dashboard