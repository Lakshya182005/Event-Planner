import React, { useState } from 'react'
import Data from '../Data'
import EventCard from './EventCard'

function Eventlist() {

    let [data,setData]=useState(Data)
    
  return (
    
    <div>
        {data.map((ele,ind)=>{
            return <EventCard key={ind} data={ele}/>
        })}

    </div>
  )
}

export default Eventlist