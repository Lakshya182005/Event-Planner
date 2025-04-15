import React, { useEffect, useState } from 'react'

import EventCard from './EventCard'
import { impData } from '../Data'


function Eventlist(props) {
    let Data = impData()
    let [search,setSearch]=useState("")
    let [data,setData]=useState(Data)
    let [todayData,setTodayData]=useState(Data)
    const backup=Data
    console.log(data)


    useEffect(()=>{
      if (props.today){

        // let date = new Date() will work with real data
  
        let date = "2025-04-16T"
        let k = data.filter((ele)=>ele.date.includes(date))
        setData(k)
        setTodayData(k)
      }else{
        setData(backup)
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.today])

    function changeSearch(e) {
      const value = e.target.value.toLowerCase();
      setSearch(value);
    
      if (search === "" && !props.today) {
        setData(backup);
        return;
      }else if(props.today && search !==''){
        const filt = data.filter((ele) =>
          ele.event.toLowerCase().includes(search)
        );
        setData(filt);
      }else if(!props.today && search !==""){
        const filt = backup.filter((ele) =>
        ele.event.toLowerCase().includes(search)
      );
      setData(filt);

      }else{
        const filt = todayData.filter((ele) =>
          ele.event.toLowerCase().includes(search)
        );
        setData(filt);

      }
    
      
    }

    
  return (
    
    <div>
        <div style={{ padding: "10px" }}>
        <input type="search" placeholder="Search Events" onChange={changeSearch} />
      </div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
      {data.map((ele,ind)=>{
            return <EventCard key={ind} data={ele}/>
        })}

      </div>
        

    </div>
  )
}

export default Eventlist