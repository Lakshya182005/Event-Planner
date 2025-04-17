import React from 'react'
import { useEvents } from '../Data'


function EventCard(props) {
  const {deleteEvent} = useEvents()
  return (
    <div>
        <h1>{props.data.event}</h1>
        <h4>{props.data.date}</h4>
        <h3>{props.data.location}</h3>
        <p>{props.data.description}</p>
        <button onClick={()=>{alert(props.data.participants)}} >participants</button>
        <button onClick={()=>{props.handleEdit(true);props.setEditIndex(props.index)}}>Edit Event</button>
        <button onClick={()=>{deleteEvent(props.index);props.handleEdit(props.index)}}>Delete Event</button>

    </div>
  )
}

export default EventCard