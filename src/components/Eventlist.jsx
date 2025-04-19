import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import { useEvents } from '../Data'
import Intro from './Intro'

function Eventlist(props) {
    const { events } = useEvents()
    const [search, setSearch] = useState("")
    const [data, setData] = useState(events)
    const [todayData, setTodayData] = useState(events)
    const backup = events


    const totalEvents = data.length
    const openEvents = data.filter(event => event.status === "Open for Registration").length

    useEffect(() => {
        if (props.today) {
            const date = "2025-04-16T"
            const k = events.filter(ele => ele.date.includes(date))
            setData(k)
            setTodayData(k)
        } else {
            setData(backup)
        }
    }, [props.today, events])

    function changeSearch(e) {
      setSearch(e.target.value);
    }

    function handleSearch() {
      const value = search.toLowerCase();
    
      if (value == "" && !props.today) {
        setData(backup);
      } else if (props.today && value != "") {
        const filt = todayData.filter((ele) =>
          ele.event.toLowerCase().includes(value)
        );
        setData(filt);
      } else if (!props.today && value != "") {
        const filt = backup.filter((ele) =>
          ele.event.toLowerCase().includes(value)
        );
        setData(filt);
      } else {
        const filt = todayData.filter((ele) =>
          ele.event.toLowerCase().includes(value)
        );
        setData(filt);
      }
    }

    return (
        <div className="p-4 bg-gray-50 min-h-screen">

            <Intro data={{ total: totalEvents, open: openEvents }} />

            <div className="p-4">

                <input type="text" placeholder="Search Events" onChange={changeSearch}     className="flex-grow p-2 border-2 border-[#FFB200] rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5B00]"/>

                <button onClick={handleSearch} className="bg-[#FFB200] hover:bg-[#EB5B00] text-[#640D5F] font-semibold px-4 py-2 rounded-md transition">
                  Search
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

                {data.map((ele, ind) => (
                    <EventCard key={ind} data={ele} index ={ind} setEditIndex={props.setEditIndex} handleEdit={props.handleEdit} />
                ))}

            </div>

        </div>
    )
}

export default Eventlist