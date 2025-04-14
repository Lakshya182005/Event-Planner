import React, { useEffect, useState } from 'react'
import Data from '../Data'
import EventCard from './EventCard'

function Eventlist(props) {


    let [data,setData]=useState(Data)
    const backup=Data
    console.log(data)

    useEffect(()=>{
      if (props.today){

        // let date = new Date() will work with real data
  
        let date = "2025-04-25T17:30:00Z"
        let k = data.filter((ele)=>ele.date == date)
        setData(k)
      }else{
        setData(backup)
      }

    },[props.today])

    
  return (
    
    <div>
        {data.map((ele,ind)=>{
            return <EventCard key={ind} data={ele}/>
        })}

    </div>
  )
}

export default Eventlist