import React from 'react'
import { useEvents } from '../Data'


function EventCard(props) {
  const {deleteEvent} = useEvents()

  const formattedDate = new Date(props.data.date).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  




  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#D91656] hover:shadow-lg transition">
        <h1 className="text-xl font-bold text-[#640D5F]">{props.data.event}</h1>
        <h4 className="text-[#EB5B00]">{formattedDate}</h4>
        <h3 className="text-[#FFB200]">{props.data.location}</h3>
        <p className="text-gray-600 my-2">{props.data.description}</p>
        <button onClick={()=>{alert(props.data.participants)}} className="bg-[#640D5F] hover:bg-[#D91656] text-white px-3 py-1 text-sm rounded" >
        Participants
        </button>
        <button onClick={()=>{props.handleEdit(true);props.setEditIndex(props.index)}} className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] px-3 py-1 text-sm rounded">
        Edit Event
        </button>
        <button onClick={()=>{deleteEvent(props.index);}} className="bg-[#D91656] hover:bg-[#EB5B00] text-white px-3 py-1 text-sm rounded">
        Delete Event
        </button>

    </div>
  )
}

export default EventCard