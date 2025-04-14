import React from 'react'

function EventCard(props) {
  return (
    <div>
        <h1>{props.data.event}</h1>
        <h4>{props.data.date}</h4>
        <h3>{props.data.location}</h3>
        <button onClick={()=>{alert(props.data.participants)}} >participants</button>

    </div>
  )
}

export default EventCard