import React from 'react'
import { useEvents } from '../Data'


function EventCard(props) {
  const {deleteEvent} = useEvents()
  return (
    <div>
        <h1>{props.data.event}</h1>
        <h4>{props.data.date}</h4>
        <h3>{props.data.location}</h3>
        <button onClick={()=>{alert(props.data.participants)}} >participants</button>
        <button onClick={()=>{deleteEvent(props.index)}}>Delete Event</button>

    </div>
  )
}

export default EventCard