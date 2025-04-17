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
        const value = e.target.value.toLowerCase()
        setSearch(value)
        if (search === "" && !props.today) {
          setData(backup);
          return;
        } else if (props.today && search !== '') {
          const filt = data.filter((ele) =>
            ele.event.toLowerCase().includes(search)
          );
          setData(filt);
        } else if (!props.today && search !== "") {
          const filt = backup.filter((ele) =>
            ele.event.toLowerCase().includes(search)
          );
          setData(filt);
        } else {
          const filt = todayData.filter((ele) =>
            ele.event.toLowerCase().includes(search)
          );
          setData(filt);
        }
    }

    return (
        <div>
            <Intro data={{ total: totalEvents, open: openEvents }} />
            <div style={{ padding: "10px" }}>
                <input type="text" placeholder="Search Events" onChange={changeSearch} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                {data.map((ele, ind) => (
                    <EventCard key={ind} data={ele} index ={ind} setEditIndex={props.setEditIndex} handleEdit={props.handleEdit} />
                ))}
            </div>
        </div>
    )
}

export default Eventlist