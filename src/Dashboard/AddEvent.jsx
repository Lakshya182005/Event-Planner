import React, { useState } from 'react';
import { useEvents } from "../Data";

function AddEvent(props) {
    const { addEvent } = useEvents();
    let [latest, setLatest] = useState({
        event: "",
        date: "",
        location: "",
        organizer: "",
        description: "",
        status: "Scheduling",
        participants: []
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setLatest(prev => ({ ...prev, [name]: value }));
    }

    function handleStatus(e) {
        setLatest(prev => ({ ...prev, status: e.target.value }));
    }

    function theSubmit() {
        addEvent(latest);
        props.setaddmore(!props.addmore);
        setLatest({
            event: "",
            date: "",
            location: "",
            organizer: "",
            description: "",
            status: "Scheduling",
            participants: []
        });
    }

    return (
        <div>
            <form>
                <input type="text" name='event' placeholder='Event Name' onChange={handleChange} />
                <input type="datetime-local" name="date" placeholder='Date' onChange={handleChange} />
                <input type="text" name="location" placeholder='Location' onChange={handleChange} />
                <input type="radio" value='Scheduling' name='status' onClick={handleStatus} checked={latest.status === "Scheduling"} />
                <label>Scheduling</label>
                <input type="radio" value='open for registration' name='status' onClick={handleStatus} checked={latest.status === "open for registration"} />
                <label>Open for Registration</label>
                <input type='text' name="organizer" placeholder="Organiser" onChange={handleChange} />
            </form>
            <button onClick={theSubmit}>Go Back</button>
        </div>
    );
}

export default AddEvent;